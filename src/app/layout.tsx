// app/layout.tsx

import { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import Hotjar from '@hotjar/browser'

import './globals.css'
import Scripts from '@/components/script'

import ClientProvider from '@/components/common/ClientProvider'
import FetchSetting from '@/components/common/fetch/page'

export const metadata: Metadata = {
  title: 'Linkit',
  description: '',
  icons: {
    icon: '/logo.png',
  },
}

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteId = Number(process.env.NEXT_PUBLIC_HJID)
  const hotjarVersion = Number(process.env.NEXT_PUBLIC_HJSV)

  Hotjar.init(siteId, hotjarVersion)

  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} bg-[#fff]`}>
        <ClientProvider>
          <FetchSetting>
            <Header />
            <div className="bg-grey10">{children}</div>
            <Footer />
          </FetchSetting>
        </ClientProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        <Scripts />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
    </html>
  )
}
