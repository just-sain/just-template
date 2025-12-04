import type { FC, HTMLProps } from 'react'

import { cn } from '@lib'
import { Input } from '@ui'
import { Search } from 'lucide-react'

export const NavSearch: FC<HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
	return (
		<div className={cn('relative hidden md:block', className)} {...props}>
			<Search className='h-5 w-5 absolute inset-y-0 my-auto left-2.5' />

			<Input className='pl-10 flex-1 bg-muted border-none shadow-none w-[280px] rounded-full' placeholder='Search' />
		</div>
	)
}
