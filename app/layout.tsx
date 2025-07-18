import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JDA UMS',
  description: 'A simple CRUD application with Next.js that has BD bro, it is so awesome hahaha...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  User Management
                </Link>
                <div className="hidden md:flex space-x-6">
                  <Link href="/" className="text-gray-600 hover:text-gray-900 link link-underline link-underline-black">
                    Home
                  </Link>
                  <Link href="/users" className="text-gray-600 hover:text-gray-900 link link-underline link-underline-black">
                    Users
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}