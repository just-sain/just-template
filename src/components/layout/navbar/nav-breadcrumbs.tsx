import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@ui'

export const NavBreadcrumbs = () => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className='hidden md:block'>
					<BreadcrumbLink href='#'>Building Your Application</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className='hidden md:block' />
				<BreadcrumbItem>
					<BreadcrumbPage>Data Fetching</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
