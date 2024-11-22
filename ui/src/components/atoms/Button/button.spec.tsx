
import { render, screen } from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Button } from '.'

describe('Button', () => {
    it('should render button with default variant', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByText('Click me')
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('text-black font-bold rounded p-2')
    })

    it('should render button with ghost variant', () => {
        render(<Button variant="ghost">Ghost Button</Button>)
        const button = screen.getByText('Ghost Button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('border-2 border-[#EC6724] text-[#EC6724]')
    })

    it('should render button with primary variant', () => {
        render(<Button variant="primary">Primary Button</Button>)
        const button = screen.getByText('Primary Button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('bg-[#EC6724] text-white font-bold rounded p-2')
    })

    it('should render button with link variant', () => {
        render(<Button variant="link">Link Button</Button>)
        const button = screen.getByText('Link Button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('text-base hover:underline')
    })

    it('should pass additional props to button element', () => {
        render(<Button data-testid="custom-button" disabled>Disabled Button</Button>)
        const button = screen.getByTestId('custom-button')
        expect(button).toBeDisabled()
    })

    it('should apply additional className', () => {
        render(<Button className="custom-class">Custom Class Button</Button>)
        const button = screen.getByText('Custom Class Button')
        expect(button).toHaveClass('custom-class')
    })

   it('should handle click events', async () => {
           const handleClick = vi.fn()
           render(<Button onClick={handleClick}>Click me</Button>)
           const button = screen.getByText('Click me')
           await userEvent.click(button)
           expect(handleClick).toHaveBeenCalledTimes(1)
       })
   it ('should handle not click when is disabled', async () => {
            const handleClick = vi.fn()
            render(<Button onClick={handleClick} disabled>Click me</Button>)
            const button = screen.getByText('Click me')
            await userEvent.click(button)
            expect(handleClick).toHaveBeenCalledTimes(0)
   })
})
