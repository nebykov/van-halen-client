'use client'


import { Inter } from 'next/font/google'
import SideButton from "./SideButton";
import { navConstants } from "@/utils/constants";
import React, { cache } from 'react';
import { usePathname, useRouter } from 'next/navigation';


const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});



const SideBar: React.FC = () => {
  const router = useRouter()
  const path = usePathname()
  const [selectedButton, setSelectedButton] = React.useState('')

  React.useEffect(() => {
    const selected = navConstants.find((item) => item.href === path)
    if (selected) {
      setSelectedButton(selected?.title)
    }
  }, [router])

  const selectHandler = (selected: string, href: string): void => {
    if (selected !== selectedButton) {
      setSelectedButton(selected)
      router.push(href)
    }
  }
  return (
    <div className="fixed h-screen w-[241px] bg-black block flex-1 z-20">
      <div className="flex flex-col p-6">
        <h1 className={`${inter.className} font-bold text-white mb-6 text-center`}>Van Halen Wave</h1>
        <ul>
          {navConstants.map(({ title, element, href }) => (
            <SideButton key={title} title={title} selected={selectedButton} onSetButton={() => selectHandler(title, href)}>
              {element}
            </SideButton>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
