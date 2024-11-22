import { ButtonHTMLAttributes } from "react"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants
    children: React.ReactNode
}
type ButtonVariants = "default" | "ghost" | 'primary' | 'link'
export const Button = (props: ButtonProps) => {

    const {children, className, variant = 'default', ...rest} = props

    const BUTTON_VARIANTS: Record<ButtonVariants, string> = {
        default: 'text-black font-bold rounded p-2 hover:bg-[#EC6724] hover:text-white',
        ghost: 'border-2 border-[#EC6724] text-[#EC6724] hover:bg-[#EC6724] hover:text-white font-bold rounded w-full p-2 ',
        primary: 'bg-[#EC6724] text-white font-bold rounded p-2 hover:bg-[#EC6724]/85 hover:text-white',
        link: 'text-base hover:underline hover:text-[#EC6724] data-[active=true]:text-[#EC6724] data-[active=true]:underline'
    }

    return (<button className={`${BUTTON_VARIANTS[variant]} text-sm ${className} `} {...rest}>{children}</button>)
}