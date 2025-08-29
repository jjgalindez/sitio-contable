import {Montserrat, Lusitana} from 'next/font/google'

export const monserrat = Montserrat ({subsets: ['latin']})

export const lusitana = Lusitana({
  weight: ['400', '700'], // Lusitana solo tiene 400 y 700
  subsets: ['latin'],
})