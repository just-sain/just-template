'use client'

import { services } from '@services'
import {
	Button,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
	Skeleton,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	useSidebar,
} from '@shadcn'
import { useAuthStore } from '@store'
import { GraduationCap, LogInIcon } from 'lucide-react'

import { ASidebarUser } from './a-sidebar-user'

export function ASidebarHeader() {
	const { user, isAuthenticated, authLoading } = useAuthStore()
	const { state, isMobile } = useSidebar()

	return (
		<SidebarHeader>
			<div className='pb-2 flex items-center justify-between group-data-[collapsible=icon]:justify-center'>
				<div className='flex justify-center items-top font-bold text-primary whitespace-nowrap overflow-hidden transition-all duration-500 max-w-40 opacity-100 group-data-[collapsible=icon]:max-w-0 group-data-[collapsible=icon]:opacity-0'>
					<GraduationCap className='inline' size={36} />
					<span className='pl-2 text-2xl'>SmartPlan</span>
				</div>

				{/* logotype */}
				<SidebarTrigger className='hover:opacity-100 group-data-[collapsible=icon]:opacity-100 opacity-0' />
			</div>

			{authLoading ? (
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton className='flex items-center gap-2 p-2' size='lg'>
							<Skeleton className='h-8 w-8 rounded-lg' />
							<div className='flex-1 grid gap-1'>
								<Skeleton className='h-4 w-24 rounded' />
								<Skeleton className='h-3 w-16 rounded' />
							</div>
							<Skeleton className='ml-auto h-4 w-4 rounded' />
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			) : isAuthenticated && user ? (
				<ASidebarUser user={user} />
			) : (
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							className='w-full rounded-full transition-all duration-200 group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:gap-0'
							type='button'
							variant='default'
							onClick={() => services.auth.redirectToLogin()}
						>
							<LogInIcon />
							<span className='whitespace-nowrap overflow-hidden transition-all duration-200 max-w-24 opacity-100 group-data-[collapsible=icon]:max-w-0 group-data-[collapsible=icon]:opacity-0'>
								Войти
							</span>
						</Button>
					</TooltipTrigger>
					<TooltipContent align='center' hidden={state !== 'collapsed' || isMobile} side='right'>
						Войти
					</TooltipContent>
				</Tooltip>
			)}
		</SidebarHeader>
	)
}
