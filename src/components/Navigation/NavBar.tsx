'use client'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from '../../app/index.module.scss'
import React from "react";
import { useAppSelector } from "@/hooks/useRedux";


const NavBar: React.FC = () => {
  const [active, setActive] = React.useState(false)
  const {user, isAuth} = useAppSelector(state => state.user)
  
  return (
    <header className="h-20 w-full bg-[#181818] sticky z-10" onClick={() => setActive(false)}>
      <nav className={styles.homeNav}>
        <MdKeyboardArrowLeft fill="white"
          className={styles.homeNav__arrows} />
        <MdKeyboardArrowRight fill="white" className={styles.homeNav__arrows} />
        <div className="absolute right-0 mr-7">
          <img  src="http://localhost:3000/van-halen.png" alt="" className="w-8 h-8 rounded-full cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            setActive(!active)
          } 
           }/>
          {active && <div className="flex flex-col absolute right-0 mt-2">
            <ul onClick={(e) => {e.stopPropagation()}}
            className={"bg-[#282828] text-slate-100 w-52 rounded-lg p-2 overflow-hidden" + styles.userNavMenu}>
              {isAuth && <li className="hover:bg-slate-400 cursor-pointer rounded-lg p-1">{user?.email}</li>}
              <li className="hover:bg-slate-400 cursor-pointer rounded-lg p-1">Account</li>
              <li className="hover:bg-slate-400 cursor-pointer rounded-lg p-1">Become a Creator</li>
              <li className="mt-3 border-t-[1px]  hover:bg-slate-400 cursor-pointer rounded-lg p-1">Log out</li>
            </ul>
          </div>}
        </div>
      </nav>
    </header>
  )
}

export default NavBar
