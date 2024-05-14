import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

import './globals.css'

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

export default function RootyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
