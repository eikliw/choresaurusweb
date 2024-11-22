import { NextResponse } from 'next/server'

const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY
const LIST_ID = process.env.EMAIL_OCTOPUS_LIST_ID

if (!API_KEY) {
  throw new Error('Missing EMAIL_OCTOPUS_API_KEY environment variable')
}

if (!LIST_ID) {
  throw new Error('Missing EMAIL_OCTOPUS_LIST_ID environment variable')
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    // Add contact to Email Octopus list
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email_address: email,
          status: 'SUBSCRIBED',
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      // Handle specific Email Octopus errors
      if (data.error?.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
        return NextResponse.json(
          { message: 'You are already on our waitlist!' },
          { status: 400 }
        )
      }

      throw new Error(data.error?.message || 'Failed to add to waitlist')
    }
    
    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { message: 'Error processing request' },
      { status: 500 }
    )
  }
}
