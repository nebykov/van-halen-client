import { MdOutlineHome, MdSearch, MdOutlineLibraryMusic } from "react-icons/md";


export interface NavProps {
    title: string,
    element: React.ReactNode,
    href: string
}

export const navConstants: NavProps[] = [
    {
        title: 'Home',
        element: <MdOutlineHome fill="#B3B3B3" className="text-2xl"/>,
        href: '/home'
    },
    {
        title: 'Search',
        element: <MdSearch fill="#B3B3B3" className="text-2xl"/>,
        href: '/home/search'
    },
    {
        title: 'Library',
        element: <MdOutlineLibraryMusic fill="#B3B3B3" className="text-2xl"/>,
        href: '/home/library'
    }
]