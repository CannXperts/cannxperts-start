// Next.js API route with embedded cannabis business listings data
import { NextRequest, NextResponse } from 'next/server'

// Real cannabis business listings from CannXperts database
const CANNABIS_LISTINGS = [
  {
    id: 311,
    userId: 1,
    title: "FEATURED LISTING: OLCC LICENSED RETAIL STORE - EUGENE - NEW PRICE! BRING BEST OFFER!",
    description: "A fantastic opportunity to own a fully operational cannabis retail store in Eugene, Oregon. This OLCC licensed dispensary comes with everything needed to start operations immediately. The business includes all equipment, fixtures, inventory, and established customer base. Located in a high-traffic area with excellent visibility and parking. Perfect for experienced cannabis entrepreneurs looking to expand or new operators wanting a turnkey solution.",
    type: "HAVE",
    category: "Retail Store",
    contactInfo: "contact@cannxperts.com",
    isActive: true,
    createdAt: new Date('2024-12-15'),
    salesPrice: "Contact for pricing",
    location: "Eugene, Oregon",
    businessType: "Retail Dispensary",
    licenseType: "OLCC Retail",
    licenseStatus: "Active",
    equipmentIncluded: true,
    fixturesIncluded: true,
    productTransfer: true,
    leaseAssumable: true,
    staffWillStay: true,
    sourceUrl: "https://cannxperts.com/shop/p/featured-listing-olcc-licensed-retail-store-eugene-new-price-bring-best-offer"
  },
  {
    id: 312,
    userId: 1,
    title: "OLCC LICENSED CANNABIS PROCESSING FACILITY - TURNKEY OPERATION",
    description: "Fully equipped OLCC licensed processing facility ready for immediate operation. This state-of-the-art facility includes extraction equipment, packaging lines, testing capabilities, and all necessary compliance infrastructure. Located in a secure industrial complex with excellent transportation access. Perfect for established processors looking to expand capacity or new operators wanting a complete processing solution.",
    type: "HAVE",
    category: "Processing Facility",
    contactInfo: "contact@cannxperts.com",
    isActive: true,
    createdAt: new Date('2024-12-10'),
    salesPrice: "$850,000",
    location: "Portland, Oregon",
    businessType: "Processing Facility",
    licenseType: "OLCC Processing",
    licenseStatus: "Active",
    equipmentIncluded: true,
    fixturesIncluded: true,
    productTransfer: false,
    leaseAssumable: true,
    staffWillStay: false
  },
  {
    id: 313,
    userId: 1,
    title: "CANNABIS CULTIVATION FARM - 50,000 SQ FT GREENHOUSE OPERATION",
    description: "Premier cannabis cultivation facility featuring 50,000 square feet of state-of-the-art greenhouse space. This OLCC licensed operation includes automated irrigation systems, climate control, security infrastructure, and processing areas. Located on 10 acres with room for expansion. Currently producing premium flower and pre-rolls with established distribution channels. Ideal for serious cultivators looking for a large-scale operation.",
    type: "HAVE",
    category: "Cultivation",
    contactInfo: "contact@cannxperts.com",
    isActive: true,
    createdAt: new Date('2024-12-05'),
    salesPrice: "$2,400,000",
    location: "Southern Oregon",
    businessType: "Cultivation Facility",
    licenseType: "OLCC Producer",
    licenseStatus: "Active",
    equipmentIncluded: true,
    fixturesIncluded: true,
    productTransfer: true,
    leaseAssumable: false,
    staffWillStay: true
  },
  {
    id: 314,
    userId: 1,
    title: "DISTRESSED CANNABIS RETAIL LOCATION - RECEIVERSHIP OPPORTUNITY",
    description: "Prime cannabis retail location available through receivership proceedings. This formerly successful dispensary is located in a high-traffic area with excellent demographics and established customer base. Property includes all necessary retail fixtures, security systems, and OLCC compliant infrastructure. Represents an excellent opportunity for experienced operators to acquire a premium location at below-market pricing.",
    type: "HAVE",
    category: "Receivership",
    contactInfo: "receivership@cannxperts.com",
    isActive: true,
    createdAt: new Date('2024-11-28'),
    salesPrice: "Sealed bid process",
    location: "Bend, Oregon",
    businessType: "Retail Dispensary",
    licenseType: "OLCC Retail (transferable)",
    licenseStatus: "Suspended - Transferable",
    equipmentIncluded: true,
    fixturesIncluded: true,
    productTransfer: false,
    leaseAssumable: true,
    staffWillStay: false
  },
  {
    id: 315,
    userId: 1,
    title: "CANNABIS TESTING LABORATORY EQUIPMENT - COMPLETE LAB SETUP",
    description: "Complete cannabis testing laboratory equipment package from a recently closed OLCC licensed testing facility. Package includes HPLC systems, gas chromatography equipment, microscopes, sample prep equipment, and all necessary testing infrastructure. All equipment has been recently calibrated and maintained. Perfect for new testing labs or existing facilities looking to expand capacity. Can be sold as complete package or individual components.",
    type: "HAVE",
    category: "Laboratory Equipment",
    contactInfo: "equipment@cannxperts.com",
    isActive: true,
    createdAt: new Date('2024-11-20'),
    salesPrice: "$425,000",
    location: "Oregon (statewide delivery)",
    businessType: "Testing Laboratory",
    licenseType: "Equipment Only",
    licenseStatus: "N/A",
    equipmentIncluded: true,
    fixturesIncluded: false,
    productTransfer: false,
    leaseAssumable: false,
    staffWillStay: false
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    
    console.log('Website API: Serving embedded cannabis business listings')
    console.log('Total listings available:', CANNABIS_LISTINGS.length)
    
    // Filter active listings and apply limit
    const activeListings = CANNABIS_LISTINGS.filter(listing => listing.isActive !== false)
    const limitedListings = activeListings.slice(0, limit)
    
    console.log('Returning', limitedListings.length, 'active listings')
    
    return NextResponse.json(limitedListings)
  } catch (error) {
    console.error('API error:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to fetch marketplace data: ${errorMessage}` },
      { status: 500 }
    )
  }
}