import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Header from '@/components/Head/Header'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'SGUtils',
  description: 'Stasg utils application',
  icons: '/icons/sgu.jpg'
}

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

config.autoAddCss = false

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={montserrat.className}>
      <body>
        <Header />
        <main className='mt-[20%] lg:mt-[17%] xl:mt-[15%] 2xl:mt-[15%] 3xl:mt-[13%]'>
          {children}
        </main>
      </body>
    </html>
  )
}
