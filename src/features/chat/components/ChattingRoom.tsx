'use client'

import { useEffect, useState, useCallback } from 'react'
import { ChatMessage } from '../types/ChatTypes'
import { getChatMessages } from '../api/ChatApi'
import ChattingBasicProfile from './ChattingBasicProfile'
import ChattingInput from './ChattingInput'
import SendFromMessage from './SendFromMessage'
import SendToMessage from './SendToMessage'
import { useChatStore } from '../store/useChatStore'

interface ChattingRoomProps {
  chatRoomId?: number
}

export default function ChattingRoom({ chatRoomId }: ChattingRoomProps) {
  const { messages, setMessages, addMessage } = useChatStore()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!chatRoomId) return

    const initializeChat = async () => {
      try {
        setIsLoading(true)
        const response = await getChatMessages(chatRoomId)
        setMessages(chatRoomId, response.result.messages)
      } catch (error) {
        console.error('Failed to initialize chat:', error)
      } finally {
        setIsLoading(false)
      }
    }

    initializeChat()
  }, [chatRoomId, setMessages])

  // 메시지 전송 핸들러
  const handleSendMessage = useCallback(
    (content: string) => {
      if (!chatRoomId) return

      const timestamp = new Date().toISOString()
      const myMessage: ChatMessage = {
        messageId: Date.now().toString(),
        chatRoomId: Number(chatRoomId),
        content,
        timestamp,
        isMyMessage: true,
        messageSenderType: 'PROFILE',
        messageSenderId: '',
        read: false,
        messageSenderLogoImagePath: '',
      }
      addMessage(chatRoomId, myMessage)
    },
    [chatRoomId, addMessage],
  )

  if (isLoading) {
    return (
      <div className="flex min-h-[calc(100vh-10rem)] w-[48rem] items-center justify-center rounded-2xl border border-grey30 bg-white">
        로딩 중...
      </div>
    )
  }

  if (!chatRoomId) {
    return (
      <div className="flex min-h-[calc(100vh-10rem)] w-[48rem] items-center justify-center rounded-2xl border border-grey30 bg-white text-grey60">
        대화 내역이 없어요
      </div>
    )
  }

  return (
    <div className="flex h-[calc(100vh-10rem)] w-[48rem] flex-col rounded-2xl border border-grey30 bg-grey10">
      <div className="flex-shrink-0 border-b border-grey30 px-5 py-6">
        <ChattingBasicProfile />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden px-5">
        <div className="sticky top-0 z-10 my-6 flex items-center bg-grey10 py-2">
          <div className="h-[1px] flex-1 bg-grey50"></div>
          <span className="mx-4 text-sm text-grey60">2025년 01월 01일</span>
          <div className="h-[1px] flex-1 bg-grey50"></div>
        </div>

        <div className="flex flex-1 flex-col-reverse gap-6 overflow-y-auto">
          {messages[chatRoomId]?.map((message) =>
            message.isMyMessage ? (
              <SendToMessage key={message.messageId} message={message} />
            ) : (
              <SendFromMessage key={message.messageId} message={message} />
            ),
          )}
        </div>
      </div>

      <div className="flex-shrink-0 border-t border-grey30 p-4">
        <ChattingInput onMessageSent={handleSendMessage} />
      </div>
    </div>
  )
}
