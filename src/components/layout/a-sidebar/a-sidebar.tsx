'use client'

import * as React from 'react'

import { Button, Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@ui'

import { navCourses, navFooter, navMain, navSections, navUser } from './nav-data'
import { NavFooter } from './nav-footer'
import { NavLearning } from './nav-learning'
import { NavMain } from './nav-main'
import { NavUser } from './nav-user'

export function ASidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar className='border-r-0' collapsible='icon' {...props}>
			<SidebarHeader>
				<NavUser user={navUser} />
				<Button className='w-full rounded-full' variant='default'>
					Войти
				</Button>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={navMain} />
				<NavLearning isMore label='Записанные курсы' learning={navCourses} />
				<NavLearning label='Записанные Секции' learning={navSections} />
			</SidebarContent>
			<SidebarFooter>
				<NavFooter className='mt-auto' items={navFooter} />
			</SidebarFooter>
		</Sidebar>
	)
}
