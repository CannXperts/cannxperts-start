// Webhook endpoint to receive listing updates from main app
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'cannxperts-secret-key'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Verify webhook secret
    const providedSecret = request.headers.get('x-webhook-secret')
    if (providedSecret !== WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Update the embedded listings file
    const { listings } = body
    
    if (!Array.isArray(listings)) {
      return NextResponse.json({ error: 'Invalid listings data' }, { status: 400 })
    }

    // Generate new marketplace route file with updated data
    const listingsCode = `// Auto-updated cannabis business listings
import { NextRequest, NextResponse } from 'next/server'

const CANNABIS_LISTINGS = ${JSON.stringify(listings, null, 2)};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    
    console.log('Website API: Serving auto-updated cannabis business listings')
    console.log('Total listings available:', CANNABIS_LISTINGS.length)
    
    const activeListings = CANNABIS_LISTINGS.filter(listing => listing.is_active)
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

    // Update the marketplace route file
    const marketplaceRoutePath = path.join(process.cwd(), 'app', 'api', 'marketplace', 'route.ts')
    await fs.writeFile(marketplaceRoutePath, listingsCode)
    
    console.log(`Webhook: Updated ${listings.length} listings`)
    
    return NextResponse.json({ 
      success: true, 
      message: `Updated ${listings.length} listings`,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Failed to update listings' },
      { status: 500 }
    )
  }
}