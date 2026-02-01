import * as React from 'react'

import { cn } from '@lib'
import { type VariantProps, cva } from 'class-variance-authority'

const HeadingVariants = cva('', {
	variants: {
		size: {
			h1: 'scroll-m-20 text-4xl font-bold',
			h2: 'scroll-m-20 pb-2 text-3xl font-semibold ',
			h3: 'scroll-m-20 text-2xl font-semibold',
			h4: 'scroll-m-20 text-xl font-semibold',
			h5: 'scroll-m-20 text-lg font-semibold',
			h6: 'scroll-m-20 text-base font-semibold',
		},
		tracking: {
			tight: 'tracking-tight',
			wide: 'tracking-wide',
		},
		underline: {
			bottom: 'border-b first:mt-0',
			top: 'border-t first:mb-0',
			both: 'border-b first:mt-0 border-t first:mb-0',
		},
		align: {
			center: 'text-center',
			left: 'text-left',
			right: 'text-right',
		},
		wrap: {
			balance: 'text-balance',
			pretty: 'text-pretty',
			nowrap: 'text-nowrap',
			tracking: 'tight',
		},
	},
	defaultVariants: {
		size: 'h3',
		align: 'center',
		wrap: 'balance',
	},
})

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const Heading = <T extends HeadingTag>({
	size,
	align,
	wrap,
	underline,
	tracking,
	className,
	...props
}: React.ComponentProps<T> & VariantProps<typeof HeadingVariants>) => {
	const classNames = cn(HeadingVariants({ size, align, wrap, underline, tracking, className }))

	if (size == 'h1') return <h1 className={classNames} data-slot={size} {...props} />
	if (size == 'h2') return <h2 className={classNames} data-slot={size} {...props} />
	if (size == 'h3') return <h3 className={classNames} data-slot={size} {...props} />
	if (size == 'h4') return <h4 className={classNames} data-slot={size} {...props} />
	if (size == 'h5') return <h5 className={classNames} data-slot={size} {...props} />
	if (size == 'h6') return <h6 className={classNames} data-slot={size} {...props} />
}

export { Heading, HeadingVariants }
