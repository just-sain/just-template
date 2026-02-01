import { type IUser, RoleEnum } from '@types'

// has role
export const hasRole = (current: RoleEnum, target: RoleEnum, highestRole = true): boolean => {
	switch (current) {
		case RoleEnum.ADMIN:
			return highestRole ? true : target === RoleEnum.ADMIN
		case RoleEnum.TEACHER:
			return target === RoleEnum.TEACHER
		case RoleEnum.STUDENT:
			return target === RoleEnum.STUDENT
		default:
			return false
	}
}

// define highest role
export const defineHighestRole = (current: RoleEnum): RoleEnum => {
	switch (current) {
		case RoleEnum.ADMIN:
			return RoleEnum.ADMIN
		case RoleEnum.TEACHER:
			return RoleEnum.TEACHER
		case RoleEnum.STUDENT:
			return RoleEnum.STUDENT
		default:
			return RoleEnum.TEACHER
	}
}

// is rup creator
export const isAuthor = (user: IUser, target: string): boolean => {
	if (user.role === RoleEnum.ADMIN) {
		return true
	}
	if (user.role === RoleEnum.TEACHER) {
		return user.keycloakId === target
	}

	return false
}
