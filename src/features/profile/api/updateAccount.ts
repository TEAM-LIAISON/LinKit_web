import { fetchWithAuth } from '@/shared/lib/api/fetchWithAuth'

interface UpdateMemberNameResponse {
  success: boolean
  message?: string
}
interface MarketingConsentResponse {
  success: boolean
  message?: string
}

export const updateMemberName = async (memberName: string): Promise<UpdateMemberNameResponse> => {
  const response = await fetchWithAuth('/api/v1/member/name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ memberName }),
  })

  if (!response.ok) {
    throw new Error('Failed to update member name')
  }

  return response.json()
}

export const updateMarketingConsent = async (isMarketingAgree: boolean): Promise<MarketingConsentResponse> => {
  const response = await fetchWithAuth('/api/v1/member/consent/marketing', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isMarketingAgree }),
  })

  if (!response.ok) {
    throw new Error('Failed to update marketing consent')
  }

  return response.json()
}

export const updateEmailId = async (emailId: string) => {
  const response = await fetchWithAuth('/api/v1/member/userId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ emailId }),
  })

  if (!response.ok) {
    throw new Error('Failed to update emailId')
  }

  return response.json()
}

// 휴대폰 번호 변경
export const updatePhoneNumber = async (contact: string) => {
  const response = await fetchWithAuth('/api/v1/member/contact', {
    method: 'POST',
    body: JSON.stringify({ contact }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to update phone number')
  }

  return response.json()
}
