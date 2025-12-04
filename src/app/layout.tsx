import type { Metadata } from 'next'
import { Advent_Pro } from 'next/font/google'

import { ASidebar, Navbar } from '@layout'
import { cn } from '@lib'
import { ThemeProvider } from '@providers'
import { SidebarInset, SidebarProvider } from '@ui'

import './globals.css'

// fonts
const adventPro = Advent_Pro({
	variable: '--font-advent-pro',
	subsets: ['latin', 'cyrillic'],
})

// metadata
export const metadata: Metadata = {
	title: 'Testing?',
	description: 'testing',
}

// layout
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html suppressHydrationWarning lang='ru'>
			<head />

			<body className={cn(adventPro.variable, 'min-h-screen antialiased flex flex-col')}>
				<ThemeProvider>
					<SidebarProvider defaultOpen suppressHydrationWarning>
						<ASidebar />
						<SidebarInset>
							<Navbar />

							{children}
						</SidebarInset>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
