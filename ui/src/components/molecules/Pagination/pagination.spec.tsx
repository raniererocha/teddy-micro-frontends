import {render, screen} from '@testing-library/react'
import { Pagination } from '.'


describe('Pagination', () => {
    const paginationData = {
        totalPages: 10,
        currentPage: 1
    }
    it('should be render pagination', () => {
        render(<Pagination {...paginationData} onChangePage={() => {}} />)
        const pagination = screen.getByTestId('pagination')
        expect(pagination).toBeInTheDocument()
    })
    it('should be change to page 2', () => {
        const onChangePage = vi.fn()
        render(<Pagination {...paginationData} onChangePage={onChangePage} />)
        const button = screen.getByText('2')
        button.click()
        expect(onChangePage).toHaveBeenCalledWith(2)
    })
})