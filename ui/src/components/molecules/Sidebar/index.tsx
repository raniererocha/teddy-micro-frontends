import logoImage from '../../../assets/logo.png'
import { Button } from '../../atoms/Button'
import { AppsIcon, BackIcon, HomeIcon, UserIcon } from '../../atoms/Icons'
export const Sidebar = () => {
    return (
        <div data-testid="sidebar" className='flex flex-col min-h-screen w-64 gap-10'>
            <header className='bg-[#363636] w-full h-32 flex justify-center items-center relative rounded-tr-2xl'>
                <img data-testid="logo" src={logoImage} alt="logo" className="w-28" />
                <Button className='shadow-lg absolute -bottom-4 -right-4 bg-black rounded-full aspect-square size-10 flex justify-center items-center'><BackIcon className='size-4 text-white'/></Button>
            </header>            
            <nav className='pl-6'>
                <ul className='flex flex-col gap-3'>
                    <li  className='w-full h-10 flex items-center border-[#EC6724] data-[active=true]:border-r-2'><Button className='w-full flex gap-4 data-[active=true]:text-[#EC6724] hover:bg-inherit hover:text-inherit' ><HomeIcon  /> Home</Button></li>
                    <li data-active="true" className='w-full h-10 flex items-center border-[#EC6724] data-[active=true]:border-r-2'><Button data-active="true" className='w-full flex gap-4 hover:bg-inherit hover:text-inherit data-[active=true]:text-[#EC6724] '><UserIcon fill='#EC6724' /> Clientes</Button></li>
                    <li className='w-full h-10 flex items-center border-[#EC6724] data-[active=true]:border-r-2'><Button className='w-full flex gap-4 data-[active=true]:text-[#EC6724] hover:bg-inherit hover:text-inherit'><AppsIcon /> Produtos</Button></li>
                </ul>
            </nav>
        </div>
    )
}