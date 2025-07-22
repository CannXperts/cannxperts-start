// Next.js API route to proxy requests to the Replit database
import { NextRequest, NextResponse } from 'next/server'

const REPLIT_API_URL = 'https://compliance-connect-andy623.replit.app'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit') || '10'
    
    console.log('Website API: Fetching from main app...')
    const response = await fetch(`${REPLIT_API_URL}/api/marketplace?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      console.error('Main app API error:', response.status)
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Website API: Received', data.length, 'listings from main app')
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('API proxy error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch marketplace data' },
      { status: 500 }
    )
  }
}