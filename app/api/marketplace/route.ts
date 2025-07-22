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
        'Accept': 'application/json',
        'User-Agent': 'CannXperts-Website/1.0',
      },
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Main app API error:', response.status, errorText)
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log('Website API: Received', data.length, 'listings from main app')
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('API proxy error:', error)
    
    // Add CORS headers to the error response
    const response = NextResponse.json(
      { error: `Failed to fetch marketplace data: ${error.message}` },
      { status: 500 }
    )
    
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    
    return response
  }
}