import type { INav } from '@types'
import { BookOpen, Headset, LayoutDashboard, LibraryBig, PenIcon } from 'lucide-react'

export const navMain: INav[] = [
	{
		title: 'Панель управления',
		url: '/dashboard',
		icon: LayoutDashboard,
	},
	{
		title: 'Страница 1',
		url: '/page1',
		icon: PenIcon,
		items: [
			// teacher
			{
				icon: LibraryBig,
				title: 'Item 1',
				url: '/page1/item1',
				role: 'ADMIN',
			},
			{
				icon: LibraryBig,
				title: 'Item 2',
				url: '/page1/item2',
				role: 'TEACHER',
			},
		],
	},
	{
		title: 'page2',
		url: '/page2',
		icon: BookOpen,
	},
]

export const navFooter = [
	{
		title: 'Поддержка',
		url: '/support',
		icon: Headset,
	},
]
