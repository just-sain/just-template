import Link from 'next/link'

import { SidebarTrigger } from '@ui'

import { NavBreadcrumbs } from './nav-breadcrumbs'
import { NavSearch } from './nav-search'

export const Navbar = () => {
	return (
		<nav className='p-4 sticky top-0 z-20 bg-muted/50 backdrop-blur-md'>
			<div className='flex justify-between items-center gap-4'>
				<ul className='flex items-center gap-4'>
					{linksData.map((l) => (
						<li key={l.href}>
							<Link href={l.href}>{l.name}</Link>
						</li>
					))}
				</ul>

				<NavSearch />
			</div>

			<div className='pt-4'>
				<div className='flex items-center gap-2'>
					<SidebarTrigger />
					<NavBreadcrumbs />
				</div>
			</div>
		</nav>
	)
}

const linksData = [
	{
		name: 'Администрирование',
		href: '/dashboard',
	},
	{
		name: 'Пользователи',
		href: '/users',
	},
	{
		name: 'Роли',
		href: '/roles',
	},
	{
		name: 'Разрешения',
		href: '/permissions',
	},
	{
		name: 'Настройки',
		href: '/settings',
	},
]
