import { Suspense } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Nav } from '@/Components/nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Im Darezereshki',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={inter.className}>
        <Suspense>
          <Nav/>
        {children}
        </Suspense>
      </body>
    </html>
  )
}
