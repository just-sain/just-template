import type { ComponentPropsWithoutRef } from 'react'

import { navFooter } from '@constants'
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@shadcn'
import { ThemeToggle } from '@widgets'

export function ASidebarFooter({ ...props }: ComponentPropsWithoutRef<typeof SidebarFooter>) {
	return (
		<SidebarFooter {...props}>
			<SidebarMenu>
				<ThemeToggle />

				{navFooter.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton asChild size='sm'>
							<a className='text-muted-foreground' href={item.url}>
								<item.icon />
								<span>{item.title}</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarFooter>
	)
}
