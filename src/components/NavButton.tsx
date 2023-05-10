import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

interface NavButtonProps {
    children: React.ReactNode,
    title: string
}

const NavButton: React.FC<NavButtonProps> = ({ children, title }) => {
    return (
        <li className="flex gap-4 items-center px-4 py-2 cursor-pointer hover:bg-white duration-150 ease-in-out rounded-lg">
            {children}
            <span className={`${inter.className} text-[#B3B3B3] font-bold text-[13px]`}>{title}</span>
        </li>
    )
}

export default NavButton