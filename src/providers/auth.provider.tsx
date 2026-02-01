import type { FC } from 'react'

import { cookies } from 'next/headers'

import { AuthInitializer } from '@hooks'

export const AuthProvider: FC = async () => {
	const cookieStore = await cookies()
	const hasSid = cookieStore.has('sid')

	return <AuthInitializer hasSid={hasSid} />
}
