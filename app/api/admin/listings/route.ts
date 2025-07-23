// Simple website-first admin API - manages embedded data directly
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

// Update the embedded listings in the marketplace route
async function updateMarketplaceFile(listings: any[]) {
  try {
    const marketplaceRoutePath = path.join(process.cwd(), 'app', 'api', 'marketplace', 'route.ts')
    
    const newContent = `// Auto-updated cannabis business listings - managed via website admin
import { NextRequest, NextResponse } from 'next/server'

const CANNABIS_LISTINGS = ${JSON.stringify(listings, null, 2)};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    
    console.log('Website API: Serving website-managed cannabis business listings')
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
    
    await fs.writeFile(marketplaceRoutePath, newContent)
    console.log('Marketplace file updated with', listings.length, 'listings')
    
  } catch (error) {
    console.error('Failed to update marketplace file:', error)
    throw error
  }
}

// Get current listings from the marketplace file
async function getCurrentListings(): Promise<any[]> {
  try {
    const marketplaceRoutePath = path.join(process.cwd(), 'app', 'api', 'marketplace', 'route.ts')
    const content = await fs.readFile(marketplaceRoutePath, 'utf-8')
    
    const match = content.match(/const CANNABIS_LISTINGS = (\[[\s\S]*?\]);/)
    if (match) {
      return JSON.parse(match[1])
    }
    
    return []
  } catch (error) {
    console.error('Failed to read current listings:', error)
    return []
  }
}

export async function GET() {
  try {
    const listings = await getCurrentListings()
    return NextResponse.json(listings)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch listings' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newListing = await request.json()
    
    const currentListings = await getCurrentListings()
    const newId = Math.max(0, ...currentListings.map(l => l.id)) + 1
    
    const listingWithId = {
      ...newListing,
      id: newId,
      createdAt: new Date().toISOString(),
      is_active: true
    }
    
    const updatedListings = [...currentListings, listingWithId]
    await updateMarketplaceFile(updatedListings)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Listing created successfully',
      listing: listingWithId
    })
    
  } catch (error) {
    console.error('Failed to create listing:', error)
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedListing = await request.json()
    
    const currentListings = await getCurrentListings()
    const index = currentListings.findIndex(l => l.id === updatedListing.id)
    
    if (index === -1) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
    }
    
    currentListings[index] = { ...currentListings[index], ...updatedListing }
    await updateMarketplaceFile(currentListings)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Listing updated successfully',
      listing: currentListings[index]
    })
    
  } catch (error) {
    console.error('Failed to update listing:', error)
    return NextResponse.json(
      { error: 'Failed to update listing' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = parseInt(searchParams.get('id') || '0')
    
    const currentListings = await getCurrentListings()
    const filteredListings = currentListings.filter(l => l.id !== id)
    
    if (filteredListings.length === currentListings.length) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
    }
    
    await updateMarketplaceFile(filteredListings)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Listing deleted successfully'
    })
    
  } catch (error) {
    console.error('Failed to delete listing:', error)
    return NextResponse.json(
      { error: 'Failed to delete listing' },
      { status: 500 }
    )
  }
}