import {render, screen} from '@testing-library/react'
import { Navbar } from '.'
import userEvent from '@testing-library/user-event'


describe('Navbar', () => {
    it('should be render navbar', () => {
        render(<Navbar links={{
            clientes: () => {},
            sair: () => {},
            selecionados: () => {},
        }} />)
        const navbar = screen.getByTestId('navbar')
        expect(navbar).toBeInTheDocument()
    })
    it('should be render logo', () => {
        render(<Navbar links={{
            clientes: () => {},
            sair: () => {},
            selecionados: () => {},
        }} />)
        const logo = screen.getByTestId('logo')
        expect(logo).toBeInTheDocument()
    })
    it('should be active button clientes', () => {
        render(<Navbar links={{
            clientes: () => {},
            sair: () => {},
            selecionados: () => {},
        }} />)
        const button = screen.getByText('Clientes')
        expect(button).toHaveAttribute('data-active', 'true')
    })
    it('should be active button selecionados', async () => {
        const selecionadosMock = vi.fn()
        const navbarLinks = {
            clientes: () => {},
            sair: () => {},
            selecionados: selecionadosMock,
        }
        render(<Navbar links={navbarLinks} />)
        const button = screen.getByText('Clientes Selecionados')
        await userEvent.click(button)
        expect(selecionadosMock).toHaveBeenCalled()
        expect(button).toHaveAttribute('data-active', 'true')
    })
    it('should be active button sair', async () => {
        const sairMock = vi.fn()
        const navbarLinks = {
            clientes: () => {},
            sair: sairMock,
            selecionados: () => {},
        }
        render(<Navbar links={navbarLinks} />)
        const button = screen.getByText('Sair')
        await userEvent.click(button)
        expect(sairMock).toHaveBeenCalled()
        expect(button).toHaveAttribute('data-active', 'true')
    })
})