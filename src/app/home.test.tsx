import { fireEvent, render, screen } from '@testing-library/react'

import Home from './page'

describe('Home Component', () => {
	it('should render the main heading', () => {
		render(<Home />)
		expect(screen.getByText(/UI Components Test Page/i)).toBeInTheDocument()
	})

	it('should show error message for invalid email', async () => {
		render(<Home />)

		const input = screen.getByPlaceholderText(/Enter email/i)
		const submitButton = screen.getByRole('button', { name: /Submit/i })

		fireEvent.change(input, { target: { value: 'invalid-email' } })
		fireEvent.click(submitButton)

		expect(await screen.findByText(/Invalid email address/i)).toBeInTheDocument()
	})

	it('should show success message on valid form submission', async () => {
		render(<Home />)

		const input = screen.getByPlaceholderText(/Enter email/i)
		const submitButton = screen.getByRole('button', { name: /Submit/i })

		fireEvent.change(input, { target: { value: 'test@example.com' } })
		fireEvent.click(submitButton)

		expect(await screen.findByText(/Email submitted successfully!/i)).toBeInTheDocument()
	})
})
