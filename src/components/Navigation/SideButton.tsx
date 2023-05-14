'use client'

import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

interface SideButtonProps {
    children: React.ReactNode,
    title: string,
    selected: string,
    onSetButton: () => void
}

const SideButton: React.FC<SideButtonProps> = ({ children, title, selected, onSetButton }) => {
    return (
        <li onClick={onSetButton} className={`flex gap-4 items-center px-4 py-2 cursor-pointer hover:bg-white duration-150 ease-in-out rounded-lg ${selected === title ? 'bg-white': ''}`}>
            {children}
            <span className={`${inter.className} text-[#B3B3B3] font-bold text-[13px]`}>{title}</span>
        </li>
    )
}

export default SideButton