'use client'

import type { FC, PropsWithChildren } from 'react'

import { QueryClient, QueryClientProvider, defaultShouldDehydrateQuery } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000 * 2, // 2 minute to update data
			retry: true,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
		},
		dehydrate: {
			// include pending queries in dehydration
			shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
		},
	},
})

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
