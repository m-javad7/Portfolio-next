import './globals.css'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import { Nav } from '@/components/nav/Nav'
import { Providers } from '@/components/providers'
import { Loading } from './Loading'
import DarkModeButton from '@/components/DarkMode'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Im Darezereshki',
}
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={inter.className}>
        <Suspense fallback={<Loading/>}>
          <Nav/>
          <Providers>
      <DarkModeButton/>
        {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
