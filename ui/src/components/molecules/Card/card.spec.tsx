import { render, screen } from "@testing-library/react";
import { Card } from ".";
import userEvent from "@testing-library/user-event";


describe('Card', () => {
    const cardData = {
        salary: 5000,
        company: 150000,
        name: 'Eduardo'
    }
    it('should be show name in card', () => {

        render(<Card {...cardData} />)
        const card = screen.getByText('Eduardo')
        expect(card).toBeInTheDocument()
    })
    it('should be show salary in the card', () => {
        render(<Card {...cardData} />)
        const card = screen.getByText("Salário: R$ 5.000,00")

        expect(card).toBeInTheDocument()
    })
    it('should be show company in the card', () => {
        render(<Card {...cardData} />)
        const card = screen.getByText('Empresa: R$ 150.000,00')
        expect(card).toBeInTheDocument()
    })
    it('should be delete when click on delete button',  async () => {
        const deleteMock = vi.fn()
        render(<Card {...cardData} onDelete={deleteMock} />)
        
        const cardBtn = await screen.findByTestId('btn-delete')
        await userEvent.click(cardBtn)

        expect(deleteMock).toHaveBeenCalledTimes(1)

    })
    it('should be edit when click on edit button',  async () => {
        const editMock = vi.fn()
        render(<Card {...cardData} onEdit={editMock} />)
        
        const cardBtn = await screen.findByTestId('btn-edit')
        await userEvent.click(cardBtn)

        expect(editMock).toHaveBeenCalledTimes(1)

    })
    it('should be add when click on add button',  async () => {
        const addMock = vi.fn()
        render(<Card {...cardData} onAdd={addMock} />)
        
        const cardBtn = await screen.findByTestId('btn-add')
        await userEvent.click(cardBtn)

        expect(addMock).toHaveBeenCalledTimes(1)

    })
    
})