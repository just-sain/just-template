'use client'

import type { HTMLProps } from 'react'

import Link from 'next/link'

import { cn } from '@lib'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@ui'
import { ExternalLinkIcon, MoreHorizontal, MoreVertical, Star, X } from 'lucide-react'

interface INavCoursesProps extends HTMLProps<HTMLDivElement> {
	learning: {
		name: string
		url: string
		image: string
	}[]
	label: string
	isMore?: boolean
}

export function NavLearning({ learning, label, className, isMore = false, ...props }: INavCoursesProps) {
	const { isMobile } = useSidebar()

	return (
		<SidebarGroup className={cn('group-data-[collapsible=image]:hidden', className)} {...props}>
			<SidebarGroupLabel>{label}</SidebarGroupLabel>
			<SidebarMenu>
				{learning.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton size='lg' tooltip={item.name}>
							<Link className='flex items-center gap-2' href={item.url}>
								<Avatar className='h-8 w-8 rounded-lg'>
									<AvatarImage alt={item.name} src={item.image} />
									<AvatarFallback className='rounded-lg'>CN</AvatarFallback>
								</Avatar>
								<span className='truncate w-40'>{item.name}</span>
							</Link>
						</SidebarMenuButton>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuAction showOnHover>
									<MoreVertical />
									<span className='sr-only'>More</span>
								</SidebarMenuAction>
							</DropdownMenuTrigger>

							<DropdownMenuContent
								align={isMobile ? 'end' : 'start'}
								className='w-48'
								side={isMobile ? 'bottom' : 'right'}
							>
								<DropdownMenuItem>
									<Star className='text-muted-foreground' />
									<span>Добавить в избранное</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<ExternalLinkIcon className='text-muted-foreground' />
									<span>Поделиться</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<X className='text-muted-foreground' />
									<span>Покинуть</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				))}
				{isMore && (
					<SidebarMenuItem>
						<SidebarMenuButton>
							<MoreHorizontal />
						</SidebarMenuButton>
					</SidebarMenuItem>
				)}
			</SidebarMenu>
		</SidebarGroup>
	)
}
