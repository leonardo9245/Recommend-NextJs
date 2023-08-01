import { ReactNode } from 'react'
import './globals.css'
import { Saira_Stencil_One as SairaStencilOne, Saira } from 'next/font/google'
import { FilterContextProvider } from '@/context/filter-context'

const saira = Saira({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-saira',
})
const sairaStencilOne = SairaStencilOne({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-Logo',
})

export const metadata = {
  title: 'Recommend',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${saira.variable} ${sairaStencilOne.variable} bg-bgColor`}
      >
        <FilterContextProvider>{children}</FilterContextProvider>
      </body>
    </html>
  )
}
