import {render, screen} from '@testing-library/react'
import { Select, Option } from '.'
import userEvent from '@testing-library/user-event'


describe('Select', () => {
    it('should render select with options', () => {
        render(
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
            </Select>
        )
        const select = screen.getByRole('combobox')
        expect(select).toBeInTheDocument()
    })
    it('should render select with custom className', () => {
        render(
            <Select className="custom-class">
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
            </Select>
        )
        const select = screen.getByRole('combobox')
        expect(select).toHaveClass('custom-class')
    })

    it('should select option 1', async () => {
        render(
            <Select>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
            </Select>
        )
        const select = screen.getByRole('combobox')
        await userEvent.selectOptions(select, 'option1')
        expect(select).toHaveValue('option1')
    })
    it('should have select the default option', async () => {
        render(
            <Select defaultValue='option1'>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
            </Select>
        )
        const select = screen.getByRole('combobox')
        expect(select).toHaveValue('option1')
    })
    it('should have a custom placeholder', async () => {
        render(
            <Select placeholder='Placeholder'>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
            </Select>
        )
        const select = screen.getByRole('combobox')
        expect(select).toHaveValue('')
    })
})