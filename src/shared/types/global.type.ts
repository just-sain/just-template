import type { LucideIcon } from 'lucide-react'

const RoleEnum = {
	TEACHER: 'TEACHER',
	STUDENT: 'STUDENT',
	ADMIN: 'ADMIN',
} as const

export type RoleEnum = (typeof RoleEnum)[keyof typeof RoleEnum]

export interface IGroup {
	keycloakId: string
	name: string
	specialty?: string
	qualification?: string
}

export interface IPagination<T> {
	data: T[]
	meta: {
		currentPage: number
		pages: number
		total: number
		pageSize: number
	}
}

export interface IUser {
	keycloakId: string

	username: string
	email?: string
	role: RoleEnum

	firstName: string
	lastName: string
	phone: string

	createdAt: string
	updatedAt: string
}

// navigation
export interface INav {
	title: string
	url: string
	icon: LucideIcon
	defaultOpen?: boolean
	role?: RoleEnum
	items?: {
		icon: LucideIcon
		title: string
		url: string
		role?: RoleEnum
	}[]
}
