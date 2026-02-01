'use client'

import * as React from 'react'

import { Sidebar, SidebarContent } from '@shadcn'

import { navMain } from '../../../constants/navigation.constant'
import { ASidebarMain } from './content/a-sidebar-main'
import { ASidebarFooter } from './footer/a-sidebar-footer'
import { ASidebarHeader } from './header/a-sidebar-header'

export function ASidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar className='border-r-0' collapsible='icon' variant='floating' {...props}>
			<ASidebarHeader />

			<SidebarContent>
				<ASidebarMain items={navMain} />
			</SidebarContent>

			<ASidebarFooter />
		</Sidebar>
	)
}
