// src/app/layout.tsx
import './styles/globals.css'

import { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'

export const metadata = {
  title: 'My Social Media App',
  description: 'A simple frontend for Spring Boot backend',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="w-screen h-screen bg-cover bg-center bg-no-repeat text-white overflow-x-hidden"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
