import type { IUser, RoleEnum } from '@types'

// has role
export const hasRole = (current: RoleEnum, target: RoleEnum, highestRole = true): boolean => {
	switch (current) {
		case 'ADMIN':
			return highestRole ? true : target === 'ADMIN'
		case 'TEACHER':
			return target === 'TEACHER'
		case 'STUDENT':
			return target === 'STUDENT'
		default:
			return false
	}
}

// define highest role
export const defineHighestRole = (current: RoleEnum): RoleEnum => {
	switch (current) {
		case 'ADMIN':
			return 'ADMIN'
		case 'TEACHER':
			return 'TEACHER'
		case 'STUDENT':
			return 'STUDENT'
		default:
			return 'TEACHER'
	}
}

// is rup creator
export const isAuthor = (user: IUser, target: string): boolean => {
	if (user.role === 'ADMIN') {
		return true
	}
	if (user.role === 'TEACHER') {
		return user.keycloakId === target
	}

	return false
}
