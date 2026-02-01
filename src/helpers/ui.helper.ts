// collapse helpers
const COLLAPSE_KEY = 'sidebar:collapses'

export type CollapseState = Record<string, boolean>

export const getCollapseState = (): CollapseState => {
	if (typeof window === 'undefined') return {}

	return JSON.parse(localStorage.getItem(COLLAPSE_KEY) ?? '{}')
}

export const setCollapseState = (key: string, value: boolean) => {
	const state = getCollapseState()

	state[key] = value
	localStorage.setItem(COLLAPSE_KEY, JSON.stringify(state))
}
