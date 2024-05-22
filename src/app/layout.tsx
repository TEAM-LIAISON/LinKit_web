import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Provider } from 'react-redux'

import './globals.css'
import Scripts from '@/components/script'
import { store } from './store'

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
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <Provider store={store}>
        <body className={`${pretendard.className}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      <Scripts />
    </html>
  )
}
