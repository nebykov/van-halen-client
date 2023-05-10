import { Inter } from 'next/font/google'
import NavButton from "./NavButton";
import { NavConstants } from "@/utils/constants";
import React from 'react';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const SideBar: React.FC = () => {
  return (
      <div className="fixed h-screen w-[241px] bg-black block flex-1">
        <div className="flex flex-col p-6">
          <h1 className={`${inter.className} font-bold text-white mb-6 text-center`}>Van Halen Wave</h1>
          <ul>
              {NavConstants.map(({title, element}) => (
                    <NavButton key={title} title={title}>
                       {element}
                    </NavButton>
              ))}
          </ul>
        </div>
      </div>
  )
}

export default SideBar
