import { fetchWithAuth } from '@/shared/lib/api/fetchWithAuth'

interface CreateTeamRequest {
  teamName: string
  teamShortDescription: string
  scaleName: string
  cityName: string
  divisionName: string
  teamStateNames: string[]
  isTeamPublic: boolean
}

export const createTeam = async (formData: FormData) => {
  try {
    if (formData.get('teamLogoImage')) {
      const response = await fetchWithAuth('/api/v1/team', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to create team')
      }

      return await response.json()
    }
  } catch (error) {
    console.error('Error creating team:', error)
    throw error
  }
}