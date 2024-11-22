import { forwardRef } from "react";


interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    return (
        <div className="relative" >
            <select ref={ref} {...props} className="block w-full appearance-none bg-transparent border border-[#d9d9d9] rounded-md py-1 px-3 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EC6724] focus:border-[#EC6724]">
                {props.children}
            </select>
            {/* Chevron */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                    className="w-5 h-5 text-[#d9d9d9]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    )
})
Select.displayName = "Select"

export const Option = forwardRef<HTMLOptionElement, { children: React.ReactNode } & React.OptionHTMLAttributes<HTMLOptionElement>>((props, ref) => {
    return (
        <option ref={ref} {...props} className="border border-gray-300 rounded-md p-2">
            {props.children}
        </option>
    )
})

Option.displayName = "Option"