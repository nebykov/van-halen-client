import { NextPage } from "next"
import { Inter } from 'next/font/google'
import NavButton from "@/components/NavButton";
import { NavConstants } from "@/utils/constants";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const page: NextPage = () => {
  return (
    <div className="flex flex-row gap-3">
      <div className="fixed h-screen w-[241px] bg-black block">
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
      <div>
        <header className="h-20 w-screen bg-black bg-opacity-90 ml-[241px]">
             <nav className="flex gap-2 h-full items-center ml-8 ">
               <MdKeyboardArrowLeft fill="white" 
               className="text-3xl bg-black rounded-full cursor-pointer"/>
               <MdKeyboardArrowRight fill="white" className="text-3xl bg-black rounded-full cursor-pointer"/>
             </nav>
        </header>
      </div>
    </div>
  )
}

export default page