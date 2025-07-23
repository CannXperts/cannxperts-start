import { NextRequest, NextResponse } from 'next/server'

// Fallback cannabis business listings for when main app is unavailable
const FALLBACK_LISTINGS = [
  {
    id: 1,
    title: "OLCC Licensed Retail Store - Eugene",
    description: "Fully operational cannabis retail store in Eugene, Oregon. OLCC licensed dispensary with equipment, fixtures, inventory, and established customer base.",
    type: "HAVE",
    location: "Eugene, Oregon",
    sales_price: "Contact for pricing",
    is_active: true
  },
  {
    id: 2,
    title: "Cannabis Processing Facility - Portland", 
    description: "Fully equipped OLCC licensed processing facility with extraction equipment, packaging lines, testing capabilities, and compliance infrastructure.",
    type: "HAVE",
    location: "Portland, Oregon", 
    sales_price: "$850,000",
    is_active: true
  },
  {
    id: 3,
    title: "Cannabis Cultivation Farm - 50,000 Sq Ft",
    description: "Premier cannabis cultivation facility featuring 50,000 square feet of greenhouse space with automated systems and processing areas.",
    type: "HAVE",
    location: "Southern Oregon",
    sales_price: "$2,400,000", 
    is_active: true
  },
  {
    id: 4,
    title: "Distressed Cannabis Retail Location",
    description: "Prime cannabis retail location available through receivership proceedings. High-traffic area with established customer base.",
    type: "HAVE",
    location: "Bend, Oregon",
    sales_price: "Sealed bid process",
    is_active: true
  },
  {
    id: 5,
    title: "Testing Laboratory Equipment",
    description: "Complete cannabis testing laboratory equipment package including chromatography systems, analytical instruments, and compliance software.",
    type: "HAVE",
    location: "Oregon",
    sales_price: "$425,000",
    is_active: true
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    
    // Try to fetch from main app API first (when webhook is configured)
    const mainAppUrl = process.env.MAIN_APP_API_URL || 'https://compliance-connect-andy623.replit.app'
    
    try {
      console.log('Attempting to fetch from main app:', `${mainAppUrl}/api/marketplace`)
      const response = await fetch(`${mainAppUrl}/api/marketplace?limit=${limit}`, {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN || ''}`,
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
      })
      
      if (response.ok) {
        const mainAppListings = await response.json()
        if (Array.isArray(mainAppListings) && mainAppListings.length > 0) {
          console.log(`Successfully fetched ${mainAppListings.length} listings from main app`)
          return NextResponse.json(mainAppListings)
        }
      }
    } catch (mainAppError) {
      console.log('Main app not available, using fallback listings')
    }
    
    // Use fallback listings
    const activeListings = FALLBACK_LISTINGS.filter(listing => listing.is_active !== false)
    const limitedListings = activeListings.slice(0, limit)
    
    console.log(`Returning ${limitedListings.length} fallback cannabis business listings`)
    return NextResponse.json(limitedListings)
    
  } catch (error) {
    console.error('Marketplace API error:', error)
    return NextResponse.json(
      { error: 'Failed to load marketplace listings' },
      { status: 500 }
    )
  }
}