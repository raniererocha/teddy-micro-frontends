import { Button } from "../../atoms/Button"
import { MenuIcon } from "../../atoms/Icons"
import { Text } from "../../atoms/Text"
import logoImage from '../../../assets/logo.png'
import { useCallback, useState } from "react"

export interface NavbarProps {
    links: Record<LINK_KEY, HandleFunctionProps>
    username: string
}
type LINK_KEY = 'clientes' | 'selecionados' | 'sair'
type HandleFunctionProps = () => void
export const Navbar = (props: NavbarProps) => {
    const {links} = props
    const {clientes, sair, selecionados} = links

    const [activeButton, setActiveButton] = useState<string>("clientes")


    const handleClients = useCallback(() => {
        clientes && clientes()
        setActiveButton("clientes")
    }, [clientes])

    const handleSelecionados = useCallback(() => {
        selecionados && selecionados()
        setActiveButton("selecionados")
    }, [selecionados])

    const handleSair = useCallback(() => {
        sair && sair()
        setActiveButton("sair")
    }, [sair])

    return (
        <header data-testid="navbar" className="flex justify-between items-center py-6 px-12 shadow-menu">       
            <nav className="w-full flex justify-between">
            <div className="flex items-center gap-11">
                    <Button><MenuIcon className="size-5" /></Button>
                    <img data-testid="logo" src={logoImage} alt="logo" className="w-28" />
                </div>
                <ul className="flex gap-8 items-center">
                    <li><Button data-active={activeButton === "clientes"} variant="link" onClick={handleClients}> Clientes</Button></li>
                    <li><Button data-active={activeButton === "selecionados"} variant="link" onClick={handleSelecionados}> Clientes Selecionados</Button></li>
                    <li><Button data-active={activeButton === "sair"} variant="link" onClick={handleSair}> Sair</Button></li>
                </ul>
                <div className="flex items-center"><Text>Olá, <strong>{props.username || 'Usuário'}</strong>!</Text></div>
            </nav>     
        </header>
    )
}