// src/features/profile/api/profileEditApi.ts

import { fetchWithAuth } from '@/shared/lib/api/fetchWithAuth'

export async function fetchProfileData() {
  try {
    const response = await fetchWithAuth(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/api/v1/profile/left/menu`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Error fetching profile data: ${response.status} - ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching profile data:', error)
    throw error
  }
}