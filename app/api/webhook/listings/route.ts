// Website webhook endpoint to receive updates from main app
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'cannxperts-sync'

export async function POST(request: NextRequest) {
  try {
    const providedSecret = request.headers.get('x-webhook-secret')
    if (providedSecret !== WEBHOOK_SECRET) {
      console.log('Webhook: Invalid secret provided')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { listings, source, timestamp } = body

    if (!Array.isArray(listings)) {
      return NextResponse.json({ error: 'Invalid listings data' }, { status: 400 })
    }

    console.log(`[webhook] Received ${listings.length} listings from ${source} at ${timestamp}`)

    // Update marketplace route file with new listings
    const marketplaceRoutePath = path.join(process.cwd(), 'app', 'api', 'marketplace', 'route.ts')
    
    const newContent = `// Cannabis business listings - updated from main app
import { NextRequest, NextResponse } from 'next/server'

// Last updated: ${timestamp} from ${source}
const CANNABIS_LISTINGS = ${JSON.stringify(listings, null, 2)};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    
    console.log('Website API: Serving synced cannabis business listings')
    console.log('Total listings available:', CANNABIS_LISTINGS.length)
    
    const activeListings = CANNABIS_LISTINGS.filter(listing => listing.isActive !== false)
    const limitedListings = activeListings.slice(0, limit)
    
    console.log('Returning', limitedListings.length, 'active listings')
    
    return NextResponse.json(limitedListings)
  } catch (error) {
    console.error('API error:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: \`Failed to fetch marketplace data: \${errorMessage}\` },
      { status: 500 }
    )
  }
}
`
    
    await fs.writeFile(marketplaceRoutePath, newContent)
    
    console.log(`[webhook] Updated website with ${listings.length} listings from main app`)
    
    return NextResponse.json({ 
      success: true, 
      message: `Updated ${listings.length} listings`,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('[webhook] Error updating listings:', error)
    return NextResponse.json(
      { error: 'Failed to update listings' },
      { status: 500 }
    )
  }
}