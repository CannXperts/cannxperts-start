import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const REPLIT_API_URL = 'https://compliance-connect-andy623.replit.app'

// Unified data management - updates both website and main app
async function updateLocalListings(listingData: any, action: 'create' | 'update' | 'delete') {
  try {
    const marketplaceRoutePath = path.join(process.cwd(), 'app', 'api', 'marketplace', 'route.ts')
    const currentContent = await fs.readFile(marketplaceRoutePath, 'utf-8')
    
    // Extract current listings array from the file
    const listingsMatch = currentContent.match(/const CANNABIS_LISTINGS = (\[[\s\S]*?\]);/)
    if (!listingsMatch) return
    
    let listings = JSON.parse(listingsMatch[1])
    
    if (action === 'create') {
      const newId = Math.max(...listings.map((l: any) => l.id), 0) + 1
      listings.push({ ...listingData, id: newId, createdAt: new Date() })
    } else if (action === 'update') {
      const index = listings.findIndex((l: any) => l.id === listingData.id)
      if (index !== -1) {
        listings[index] = { ...listings[index], ...listingData }
      }
    } else if (action === 'delete') {
      listings = listings.filter((l: any) => l.id !== listingData.id)
    }
    
    // Regenerate the route file with updated listings
    const newContent = currentContent.replace(
      /const CANNABIS_LISTINGS = \[[\s\S]*?\];/,
      `const CANNABIS_LISTINGS = ${JSON.stringify(listings, null, 2)};`
    )
    
    await fs.writeFile(marketplaceRoutePath, newContent)
    console.log(`Local listings updated: ${action} completed`)
    
  } catch (error) {
    console.error('Failed to update local listings:', error)
  }
}

export async function GET() {
  try {
    const response = await fetch(`${REPLIT_API_URL}/api/admin/listings`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch listings' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Admin listings fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log('Admin API: Creating listing with data:', body)
    
    // Update website data immediately 
    await updateLocalListings(body, 'create')
    
    // Sync to main app in background (don't wait for response)
    fetch(`${REPLIT_API_URL}/api/admin/listings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Main app create error:', response.status, errorText)
      return NextResponse.json(
        { error: `Failed to create listing: ${errorText}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Admin create listing error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    
    const response = await fetch(`${REPLIT_API_URL}/admin/listings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to update listing' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Admin update listing error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    
    const response = await fetch(`${REPLIT_API_URL}/admin/listings`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to update listing status' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Admin patch listing error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    
    const response = await fetch(`${REPLIT_API_URL}/admin/listings`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to delete listing' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Admin delete listing error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}