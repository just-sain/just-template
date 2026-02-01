import type { FC, PropsWithChildren } from 'react'

import { cookies } from 'next/headers'

import { SidebarProvider } from '@shadcn'

export const ASidebarProvider: FC<PropsWithChildren> = async ({ children }) => {
	const cookieStore = await cookies()
	const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true'

	return (
		<SidebarProvider suppressHydrationWarning defaultOpen={defaultOpen}>
			{children}
		</SidebarProvider>
	)
}
