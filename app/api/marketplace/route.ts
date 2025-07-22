// Next.js API route to proxy requests to the Replit database
import { NextRequest, NextResponse } from 'next/server'

const REPLIT_API_URL = 'https://compliance-connect-andy623.replit.app'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit') || '10'
    
    const response = await fetch(`${REPLIT_API_URL}/api/marketplace?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('API proxy error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch marketplace data' },
      { status: 500 }
    )
  }
}