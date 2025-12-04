'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, SidebarMenuButton } from '@ui'
import { Moon, Sun } from 'lucide-react'

enum ThemeEnum {
	light = 'Светлая тема',
	dark = 'Темная тема',
	system = 'Системная тема',
}

export function ThemeToggle() {
	const [themeText, setThemeText] = useState(ThemeEnum.system)
	const { setTheme, theme } = useTheme()

	useEffect(() => {
		if (!theme) return

		setThemeText(ThemeEnum[theme])
	}, [theme])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div>
					<SidebarMenuButton>
						<Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
						<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />

						<span className='ml-2'>{themeText}</span>
					</SidebarMenuButton>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
