'use client'

import { useEffect } from 'react'
import ChannelService from './third-party/ChannelTalk'

export default function CustomClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const CT = new ChannelService()
    //주의! 여기서 CT.loadScript()를 선언하면 ChannelIO script included twice. 오류 발생합니다!
    CT.boot({ pluginKey: process.env.NEXT_PUBLIC_CHANNEL_PLUGIN_KEY || '' })

    //for unmount
    return () => {
      CT.shutdown()
    }
  }, [])
  return <>{children}</>
}