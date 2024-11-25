import { Button } from "../../atoms/Button"
import { Input } from "../../atoms/Input"
import { Modal } from "../../molecules/Modal"

export const ModalCreate = () => {
    return(
        <Modal isOpen={true} onClose={() =>{}} title="Criar cliente:">
            <div>
                <form  className="w-[400px] flex flex-col gap-2">
                    <Input type="text" placeholder="Digite o nome:" />
                    <Input type="text" placeholder="Digite o salário:" />
                    <Input type="text" placeholder="Digite o valor da empresa:" />
                    <Button variant="primary">Criar cliente</Button>
                </form>
            </div>
        </Modal>
    )
}