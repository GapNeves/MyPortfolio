import './globals.scss'
import { Roboto } from 'next/font/google'

const inter = Roboto({ 
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"]
})

export const metadata = {
  title: 'Gabriel Pereira',
  description: 'Gabriel Pereira is a Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
