import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Teste Leadster',
    description: 'Landing page da Leadster'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt_br">
            <body>{children}</body>
        </html>
    )
}
