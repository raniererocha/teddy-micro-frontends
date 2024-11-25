import { useCallback } from "react"
import { Button } from "../../atoms/Button"
import { PencilIcon, PlusIcon, TrashIcon } from "../../atoms/Icons"
import { Text } from "../../atoms/Text"

export interface CardProps {
    name: string
    salary: number
    company: number
    onDelete?: () => void
    onEdit?: () => void
    onAdd?: () => void
}


export const Card = (props: CardProps) => {
    const {company, salary, name, onDelete, onEdit, onAdd} = props

    const handleAdd = useCallback(() => {
        if (onAdd) {
            onAdd()
        }
    }, [onAdd])

    const handleEdit = useCallback(() => {
        if (onEdit) {
            onEdit()
        }
    }, [onEdit])

    const handleDelete = useCallback(() => {
        if (onDelete) {
            onDelete()
        }
    }, [onDelete])

    return (

        <div className="bg-white rounded flex flex-col py-4 items-center text-center gap-4 max-w-[285px] shadow-card">
            <div className="flex flex-col space-y-2">
                <Text data-testid="card-title" variant="title">{name}</Text>
                <Text data-testid="card-salary">Salário: {
                        salary.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })
                    }</Text>
                <Text data-testid="card-company">Empresa: {
                    company.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })
                    }</Text>
            </div>
            <div className="flex justify-between w-full">
                <Button data-testid='btn-add' onClick={handleAdd}><PlusIcon className="size-6 "/></Button>
                <Button data-testid='btn-edit' onClick={handleEdit}><PencilIcon className="size-5" /></Button>
                <Button data-testid='btn-delete' onClick={handleDelete}><TrashIcon className="fill-red-500 size-5"/></Button>
            </div>
        </div>
    )
}