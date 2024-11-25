import { render, screen } from '@testing-library/react'
import { Sidebar } from '.'

describe('Sidebar', () => {
    it('should be render sidebar', () => {
        render(<Sidebar />)
        const sidebar = screen.getByTestId('sidebar')
        expect(sidebar).toBeInTheDocument()
    })
    it('should be render logo', () => {
        render(<Sidebar />)
        const logo = screen.getByTestId('logo')
        expect(logo).toBeInTheDocument()
    })
    it('should be render button', () => {
        render(<Sidebar />)
        const button = screen.getByText('Clientes')
        expect(button).toBeInTheDocument()
    })
})