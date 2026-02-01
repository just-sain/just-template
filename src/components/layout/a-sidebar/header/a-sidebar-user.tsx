'use client'

import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import { services } from '@services'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@shadcn'
import type { IUser } from '@types'
import { ChevronsUpDown, LogOut, Mail, Phone, ShieldUser, User } from 'lucide-react'

interface INavUserProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	user: IUser
}

export const ASidebarUser: FC<INavUserProps> = ({ user, className, ...props }) => {
	const { isMobile } = useSidebar()

	return (
		<SidebarMenu className={className} {...props}>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
							size='lg'
						>
							<Avatar className='h-8 w-8 rounded-lg'>
								<AvatarImage alt={user.username} src='https://avatars.githubusercontent.com/u/1486366' />
								<AvatarFallback className='rounded-lg'>{user.username}</AvatarFallback>
							</Avatar>

							<div className='grid flex-1 text-left text-sm leading-tight'>
								<span className='truncate font-medium'>
									{user.firstName} {user.lastName}
								</span>
								<span className='truncate text-xs text-muted-foreground'>{user.role}</span>
							</div>
							<ChevronsUpDown className='ml-auto size-4' />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align='end'
						className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
						side={isMobile ? 'bottom' : 'right'}
						sideOffset={4}
					>
						<DropdownMenuLabel className='p-0 font-normal'>
							<div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
								<Avatar className='h-8 w-8 rounded-lg'>
									<AvatarImage alt={user.username} src='https://avatars.githubusercontent.com/u/1486366' />
									<AvatarFallback className='rounded-lg'>{user.username}</AvatarFallback>
								</Avatar>
								<div className='grid flex-1 text-left text-sm leading-tight'>
									<span className='truncate font-medium'>{user.firstName}</span>
									<span className='truncate text-xs'>{user.lastName}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<User />
								{user.username}
							</DropdownMenuItem>
							<DropdownMenuItem>
								<ShieldUser />
								{user.role}
							</DropdownMenuItem>
							{user.email && (
								<DropdownMenuItem>
									<Mail />
									{user.email}
								</DropdownMenuItem>
							)}
							{user.phone && (
								<DropdownMenuItem>
									<Phone />
									{user.phone}
								</DropdownMenuItem>
							)}
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem className='cursor-pointer' onClick={() => services.auth.redirectToLogout()}>
							<LogOut />
							Выйти
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
