import { Navbar, NavbarProps } from "../../molecules/Navbar"


interface ClientTemplateProps {
    children: React.ReactNode
    menu: Pick<NavbarProps, 'links'>
    user: {name: string} | null

}
export const ClientTemplate = (props: ClientTemplateProps) => {
    return (
        <main className="flex flex-col w-screen min-h-screen">
        <Navbar links={props.menu.links} username={props.user?.name || ""} />
        <div className="flex-1 px-32 py-8"> 
            {props.children}
        </div>
    </main>
    )
}