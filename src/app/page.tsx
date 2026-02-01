'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Alert,
	AlertDescription,
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	Avatar,
	AvatarFallback,
	AvatarImage,
	Badge,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Heading,
	Input,
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Separator,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	Skeleton,
	Spinner,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@shadcn'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	email: z.string().email('Invalid email address'),
})

function Home() {
	const [alertDialogOpen, setAlertDialogOpen] = useState(false)
	const [sheetOpen, setSheetOpen] = useState(false)
	const [collapsibleOpen, setCollapsibleOpen] = useState(false)
	const [successMessage, setSuccessMessage] = useState('')
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	})

	return (
		<div className='max-w-7xl px-4 mx-auto p-4 space-y-8'>
			<Heading size='h1'>UI Components Test Page</Heading>

			{/* Buttons */}
			<section className='space-y-4'>
				<Heading size='h2'>Buttons</Heading>
				<div className='flex flex-wrap gap-2'>
					<Button>Default Button</Button>
					<Button variant='secondary'>Secondary</Button>
					<Button variant='outline'>Outline</Button>
					<Button variant='ghost'>Ghost</Button>
					<Button variant='destructive'>Destructive</Button>
				</div>
				<ButtonGroup>
					<Button>Group 1</Button>
					<Button>Group 2</Button>
				</ButtonGroup>
			</section>

			{/* Alerts */}
			<section className='space-y-4'>
				<Heading size='h2'>Alerts</Heading>
				<Alert>
					<AlertDescription>This is a default alert.</AlertDescription>
				</Alert>
				<Alert variant='destructive'>
					<AlertDescription>This is a destructive alert.</AlertDescription>
				</Alert>
				<Button onClick={() => setAlertDialogOpen(true)}>Open Alert Dialog</Button>
				<AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you sure?</AlertDialogTitle>
							<AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction>Continue</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</section>

			{/* Cards and Badges */}
			<section className='space-y-4'>
				<Heading size='h2'>Cards and Badges</Heading>
				<Card>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Card description</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Card content</p>
						<Badge>Badge</Badge>
						<Badge variant='secondary'>Secondary Badge</Badge>
					</CardContent>
					<CardFooter>
						<Button>Action</Button>
					</CardFooter>
				</Card>
			</section>

			{/* Avatars */}
			<section className='space-y-4'>
				<Heading size='h2'>Avatars</Heading>
				<div className='flex items-center gap-4'>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar className='size-10'>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar className='size-12'>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar>
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<Avatar className='size-10'>
						<AvatarFallback>AB</AvatarFallback>
					</Avatar>
				</div>
			</section>

			{/* Breadcrumbs */}
			<section className='space-y-4'>
				<Heading size='h2'>Breadcrumbs</Heading>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href='/'>Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href='/components'>Components</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbPage>Test</BreadcrumbPage>
					</BreadcrumbList>
				</Breadcrumb>
			</section>

			{/* Form */}
			<section className='space-y-4'>
				<Heading size='h2'>Form</Heading>
				<Form {...form}>
					<form
						className='space-y-4'
						onSubmit={form.handleSubmit((data) => {
							console.log(data)
							setSuccessMessage('Email submitted successfully!')
						})}
					>
						<FormField
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input autoComplete='email' id='email' placeholder='Enter email' {...field} />
									</FormControl>
									<FormDescription>We'll never share your email.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit'>Submit</Button>
					</form>
					{successMessage && (
						<Alert>
							<AlertDescription>{successMessage}</AlertDescription>
						</Alert>
					)}
				</Form>
			</section>

			{/* Inputs and Selects */}
			<section className='space-y-4'>
				<Heading size='h2'>Inputs and Selects</Heading>
				<div className='space-y-2'>
					<Label htmlFor='input'>Input</Label>
					<Input id='input' placeholder='Type here' />
				</div>
				<div className='space-y-2'>
					<Label htmlFor='select'>Select</Label>
					<Select>
						<SelectTrigger id='select'>
							<SelectValue placeholder='Select an option' />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='option1'>Option 1</SelectItem>
							<SelectItem value='option2'>Option 2</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</section>

			{/* Dropdown Menu */}
			<section className='space-y-4'>
				<Heading size='h2'>Dropdown Menu</Heading>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Open Menu</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Billing</DropdownMenuItem>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuItem>Subscription</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</section>

			{/* Sheet */}
			<section className='space-y-4'>
				<Heading size='h2'>Sheet</Heading>
				<Button onClick={() => setSheetOpen(true)}>Open Sheet</Button>
				<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Sheet Title</SheetTitle>
							<SheetDescription>Sheet description</SheetDescription>
						</SheetHeader>
						<p>Sheet content</p>
					</SheetContent>
				</Sheet>
			</section>

			{/* Accordion */}
			<section className='space-y-4'>
				<Heading size='h2'>Accordion</Heading>
				<Accordion collapsible type='single'>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Item 1</AccordionTrigger>
						<AccordionContent>Content for item 1</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger>Item 2</AccordionTrigger>
						<AccordionContent>Content for item 2</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>

			{/* Collapsible */}
			<section className='space-y-4'>
				<Heading size='h2'>Collapsible</Heading>
				<Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
					<CollapsibleTrigger asChild>
						<Button>Toggle Collapsible</Button>
					</CollapsibleTrigger>
					<CollapsibleContent>Collapsible content</CollapsibleContent>
				</Collapsible>
			</section>

			{/* Skeleton */}
			<section className='space-y-4'>
				<Heading size='h2'>Skeleton</Heading>
				<Skeleton className='h-4 w-62' />
				<Skeleton className='h-4 w-50' />
			</section>

			{/* Spinner */}
			<section className='space-y-4'>
				<Heading size='h2'>Spinner</Heading>
				<Spinner />
			</section>

			{/* Tooltip */}
			<section className='space-y-4'>
				<Heading size='h2'>Tooltip</Heading>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button>Hover me</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Tooltip content</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</section>

			{/* Separator */}
			<section className='space-y-4'>
				<Heading size='h2'>Separator</Heading>
				<Separator />
			</section>

			{/* Sonner - Toast */}
			<section className='space-y-4'>
				<Heading size='h2'>Sonner (Toast)</Heading>
				<Button onClick={() => {}}>Show Toast</Button>
				{/* Note: Sonner needs toast function, but for demo */}
			</section>
		</div>
	)
}

export default Home
