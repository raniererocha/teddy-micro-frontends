import { LuPlus, LuPencil, LuX } from 'react-icons/lu'
import { GoTrash } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoArrowBackCircle } from "react-icons/io5";


const HomeIcon = (props: React.SVGAttributes<SVGElement>) => {
    return (
        <svg
            width={props.width || "18"}
            height={props.height || "18"}
            viewBox="0 0 18 18"
            fill={props.fill || "none"}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M16.3583 5.67485L10.9 1.30819C9.83332 0.458186 8.16666 0.449853 7.10832 1.29985L1.64999 5.67485C0.866656 6.29985 0.391656 7.54985 0.558323 8.53319L1.60832 14.8165C1.84999 16.2249 3.15832 17.3332 4.58332 17.3332H13.4167C14.825 17.3332 16.1583 16.1999 16.4 14.8082L17.45 8.52485C17.6 7.54985 17.125 6.29985 16.3583 5.67485ZM9.62499 13.9999C9.62499 14.3415 9.34166 14.6249 8.99999 14.6249C8.65832 14.6249 8.37499 14.3415 8.37499 13.9999V11.4999C8.37499 11.1582 8.65832 10.8749 8.99999 10.8749C9.34166 10.8749 9.62499 11.1582 9.62499 11.4999V13.9999Z"
                fill={props.fill || "#0F0F0F"}
            />
        </svg>
    )
}
const UserIcon = (props: React.SVGAttributes<SVGElement>) => {
    return (
        <svg
            width={props.width || "12"}
            height={props.height || "18"}
            viewBox="0 0 12 18"
            fill={props.fill || "none"}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.00003 0.625C3.8167 0.625 2.0417 2.4 2.0417 4.58333C2.0417 6.725 3.7167 8.45833 5.90003 8.53333C5.9667 8.525 6.03336 8.525 6.08336 8.53333C6.10003 8.53333 6.10836 8.53333 6.12503 8.53333C6.13336 8.53333 6.13336 8.53333 6.1417 8.53333C8.27503 8.45833 9.95003 6.725 9.95836 4.58333C9.95836 2.4 8.18336 0.625 6.00003 0.625Z"
                fill={props.fill || "#0F0F0F"}
            />
            <path
                d="M10.2334 10.75C7.90836 9.2 4.1167 9.2 1.77503 10.75C0.716695 11.4583 0.133362 12.4167 0.133362 13.4417C0.133362 14.4667 0.716695 15.4167 1.7667 16.1167C2.93336 16.9 4.4667 17.2917 6.00003 17.2917C7.53336 17.2917 9.0667 16.9 10.2334 16.1167C11.2834 15.4083 11.8667 14.4583 11.8667 13.425C11.8584 12.4 11.2834 11.45 10.2334 10.75Z"
                fill={props.fill || "#0F0F0F"}
            />
        </svg>

    )
}
const AppsIcon = (props: React.SVGAttributes<SVGElement>) => {

    return (
        <svg
            width={props.width || "18"}
            height={props.height ||"18"}
            viewBox="0 0 18 18"
            fill={props.fill || "none"}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            >
            <path
                d="M17.3334 6.01732V2.23398C17.3334 1.05898 16.8 0.583984 15.475 0.583984H12.1084C10.7834 0.583984 10.25 1.05898 10.25 2.23398V6.00899C10.25 7.19232 10.7834 7.65898 12.1084 7.65898H15.475C16.8 7.66732 17.3334 7.19232 17.3334 6.01732Z"
                fill={props.fill || "#0F0F0F"}
            />
            <path
                d="M17.3334 15.3923V12.0257C17.3334 10.7007 16.8 10.1673 15.475 10.1673H12.1084C10.7834 10.1673 10.25 10.7007 10.25 12.0257V15.3923C10.25 16.7173 10.7834 17.2507 12.1084 17.2507H15.475C16.8 17.2507 17.3334 16.7173 17.3334 15.3923Z"
                fill={props.fill || "#0F0F0F"}
            />
            <path
                d="M7.75002 6.01732V2.23398C7.75002 1.05898 7.21669 0.583984 5.89169 0.583984H2.52502C1.20002 0.583984 0.666687 1.05898 0.666687 2.23398V6.00899C0.666687 7.19232 1.20002 7.65898 2.52502 7.65898H5.89169C7.21669 7.66732 7.75002 7.19232 7.75002 6.01732Z"
                fill={props.fill || "#0F0F0F"}
            />
            <path
                d="M7.75002 15.3923V12.0257C7.75002 10.7007 7.21669 10.1673 5.89169 10.1673H2.52502C1.20002 10.1673 0.666687 10.7007 0.666687 12.0257V15.3923C0.666687 16.7173 1.20002 17.2507 2.52502 17.2507H5.89169C7.21669 17.2507 7.75002 16.7173 7.75002 15.3923Z"
                fill={props.fill || "#0F0F0F"}
            />
        </svg>

    )
}

export {
    LuPlus as PlusIcon,
    LuPencil as PencilIcon,
    GoTrash as TrashIcon,
    RxHamburgerMenu as MenuIcon,
    IoArrowBackCircle as BackIcon,
    LuX as CloseIcon,
    HomeIcon,
    UserIcon,
    AppsIcon,
}