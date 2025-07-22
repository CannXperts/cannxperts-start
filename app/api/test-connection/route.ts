// Simple test route to verify connection to main app
import { NextRequest, NextResponse } from 'next/server'

const REPLIT_API_URL = 'https://compliance-connect-andy623.replit.app'

export async function GET() {
  try {
    console.log('Testing connection to main app...')
    
    // Use simpler fetch without extra headers first
    const response = await fetch(`${REPLIT_API_URL}/api/marketplace?limit=6`)
    
    console.log('Test - Response status:', response.status)
    console.log('Test - Response ok:', response.ok)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.log('Test - Error text:', errorText)
      return NextResponse.json({
        status: 'error',
        code: response.status,
        message: errorText
      })
    }
    
    const data = await response.json()
    console.log('Test - Received data length:', data.length)
    
    return NextResponse.json({
      status: 'success',
      count: data.length,
      firstTitle: data[0]?.title || 'No listings',
      rawData: data.slice(0, 2) // Just first 2 for testing
    })
    
  } catch (error) {
    console.error('Test connection error:', error)
    return NextResponse.json({
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}