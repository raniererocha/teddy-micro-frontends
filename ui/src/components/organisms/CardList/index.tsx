import { useMemo } from "react"
import { Button } from "../../atoms/Button"
import { Option, Select } from "../../atoms/Select"
import { Card, CardProps } from "../../molecules/Card"

import { Pagination } from "../../molecules/Pagination"

interface CardListProps {
    data: CardProps[]
    totalPages?: number
    currentPage?: number
    onChangePage: (page: number) => void
    onChangeFilter: (filter: string) => void
    onCreate?: () => void
}
export const CardList = (props: CardListProps) => {

    const clientsCount = useMemo(() => {return props.data.length}, [props.data])

    return (
        <div className="w-full">
            <div className="flex justify-between py-2">
                <p className="text-lg"><strong>{clientsCount}</strong> {clientsCount === 1 ? "cliente encontrado" : "clientes encontrados"}</p>

                <div className="flex items-center gap-2">
                    <p className="text-lg">Clientes por página:</p>
               
                    <Select defaultValue={16} onChange={(value) => props.onChangeFilter(value.currentTarget.value)}>
                      <Option value="4">4</Option>
                      <Option value="8">8</Option>
                      <Option value="12">12</Option>
                      <Option value="16">16</Option>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {props.data.map((item) => (
                    <Card key={item.name} {...item} />
                ))}
            </div>
            <div className="flex flex-col items-center w-full justify-center gap-5 py-5">
                <Button variant="ghost" onClick={() => {
                    if (props.onCreate) {
                        props.onCreate()
                    }
                }}>Criar cliente</Button>
                <Pagination totalPages={props.totalPages || 1} currentPage={props.currentPage || 1} onChangePage={(page) => props.onChangePage(page)} />
            </div>
        </div>
    )
}