import { Button } from "../../atoms/Button"
import { Text } from "../../atoms/Text"

interface PaginationProps {
    totalPages: number
    currentPage: number
    onChangePage: (page: number) => void
 
}

export const Pagination = (props: PaginationProps) => {
    const {totalPages, currentPage, onChangePage} = props

    return (
        <div data-testid="pagination" className="flex items-center gap-2">
           {currentPage === 1 ? (
             <Button variant="primary" onClick={() => onChangePage(1)}>1</Button>
           ) : (
             <Button onClick={() => onChangePage(1)}>1</Button>
           )}
           {currentPage > 3 && <Text>...</Text>}
           {currentPage > 2 && <Button onClick={() => onChangePage(currentPage - 1)}>{currentPage - 1}</Button>}
           {currentPage !== 1 && <Button variant="primary" onClick={() => onChangePage(currentPage)}>{currentPage}</Button>}
           {currentPage < totalPages - 1 && <Button onClick={() => onChangePage(currentPage + 1)}>{currentPage + 1}</Button>}
           {currentPage < totalPages - 2 && <Text>...</Text>}
           {currentPage < totalPages && <Button onClick={() => onChangePage(totalPages)}>{totalPages}</Button>}
        </div>
    )
}