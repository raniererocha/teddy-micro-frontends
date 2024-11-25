
interface TextProps {
    className?: string
    children: React.ReactNode;
    variant?: 'principal' | 'title' | 'default'
}

export const Text = (props: TextProps) => {

    const {children, variant = 'default'} = props

    if (variant === 'principal') {
        return (<h1 className={`text-3xl font-sans ${props.className}`}>{children}</h1>)
    }

    if (variant === 'title') {
        return(
            <h3 className={`text-base font-bold font-sans ${props.className}`}>{children}</h3>
        )
    }

    return (<p className={`text-sm font-sans ${props.className}`}>{children}</p>)
};