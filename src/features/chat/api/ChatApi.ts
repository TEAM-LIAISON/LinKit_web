import { fetchWithAuth } from '@/shared/lib/api/fetchWithAuth'
import { CreateChatRoomRequest } from '../types/ChatTypes'

export const createChatRoom = async (requestData: CreateChatRoomRequest) => {
  const response = await fetchWithAuth('/api/v1/chat/room', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })

  if (!response.ok) {
    throw new Error('Failed to create chat room')
  }

  return response.json()
}

// 채팅방 왼쪽 목록 조회
export const getChattingList = async () => {
  const response = await fetchWithAuth('/api/v1/chat/left/menu', {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('Failed to get chatting list')
  }

  return response.json()
}