import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return <input ref={ref} {...props} className={`rounded px-3 py-2 border-2 border-[#D9D9D9] w-full text-base ${props.className}`} />
})