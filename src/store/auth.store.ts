import type { IUser } from '@types'
import { create } from 'zustand'

interface AuthState {
	user: IUser | null
	isAuthenticated: boolean
	authLoading: boolean
	setUser: (user: IUser | null) => void
	logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	isAuthenticated: false,
	authLoading: false,

	setUser: (user) => {
		let isAuthenticated = true

		if (!user) {
			isAuthenticated = false
		}

		set({
			user,
			isAuthenticated,
			authLoading: false,
		})
	},

	logout: () =>
		set({
			user: null,
			isAuthenticated: false,
		}),
}))
