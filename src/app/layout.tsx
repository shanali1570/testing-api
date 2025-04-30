import './globals.css'
import type { Metadata } from 'next'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Simple E-Commerce',
  description: 'Built with Next.js 15',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider >
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
