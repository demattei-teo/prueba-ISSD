import { Header } from '@/components'
import { GlobalProvider } from '@/context/global/globalProvider'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prueba-ISSD',
  description: 'prueba tecnica para issd ',
  generator: 'Next.js',
  applicationName: 'Prueba-ISSD',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Teo', url: 'https://www.linkedin.com/in/teodemattei/' }],
  colorScheme: 'normal',
  creator: 'Demattei Teo',
  publisher: 'Demattei Teo',
  category: 'CRUD',
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  openGraph: {
    title: 'Prueba-ISSD',
    description: 'prueba tecnica para issd.',
    url: 'https://prueba-issd.vercel.app/',
    siteName: 'Prueba-ISSD',
    locale: 'en',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GlobalProvider>
          <Toaster position='bottom-right' />
          <Header />
          <main className='min-h-[80vh] px-4 flex flex-col items-center justify-center'>{children}</main>
        </GlobalProvider>
      </body>
    </html>
  )
}
