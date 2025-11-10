import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MIKO-RK Pohrebné služby | Ružomberok | Nonstop 0905/954044',
  description: 'Profesionálne a súcitné pohrebné služby v Ružomberku a okolí. Komplexné zabezpečenie pohrebu, kremácia, nonstop dostupnosť. S úctou sprevádzame poslednou cestou.',
  keywords: [
    'pohrebné služby Ružomberok',
    'pohrebná služba nonstop',
    'kremácia',
    'pohrebníctvo',
    'MIKO-RK',
    'organizácia pohrebu',
    'smútočné oznámenia',
  ],
  authors: [{ name: 'MIKO-RK, s.r.o.' }],
  creator: 'MIKO-RK, s.r.o.',
  publisher: 'MIKO-RK, s.r.o.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://miko-rk.sk',
    title: 'MIKO-RK Pohrebné služby | Ružomberok',
    description: 'Súcitné a profesionálne pohrebné služby. Sme tu pre Vás 24/7.',
    siteName: 'MIKO-RK Pohrebné služby',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIKO-RK Pohrebné služby',
    description: 'Profesionálne pohrebné služby v Ružomberku',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="sk" 
      className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

