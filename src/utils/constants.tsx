import { MdOutlineHome, MdSearch, MdOutlineLibraryMusic } from "react-icons/md";


interface NavProps {
    title: string,
    element: React.ReactNode
}

export const NavConstants: NavProps[] = [
    {
        title: 'Home',
        element: <MdOutlineHome fill="#B3B3B3" className="text-2xl"/>
    },
    {
        title: 'Search',
        element: <MdSearch fill="#B3B3B3" className="text-2xl"/>
    },
    {
        title: 'Library',
        element: <MdOutlineLibraryMusic fill="#B3B3B3" className="text-2xl"/>
    }
]