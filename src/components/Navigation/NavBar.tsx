'use client'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from '../../app/index.module.scss'
import React from "react";
import { useAppSelector } from "@/hooks/useRedux";
import { redirect } from 'next/navigation';
import { useImage } from "@/hooks/useImage";
import { defaultImage } from "@/utils/constants";
import Link from "next/link";


const NavBar: React.FC = () => {
  const [active, setActive] = React.useState(false)
  const {user, isAuth} = useAppSelector(state => state.user)
  const imgSrc = useImage(user?.avatar, defaultImage.USER)
  const isAuthor = user?.roles.includes('AUTHOR')


  
  return (
    <header className="h-20 w-full bg-[#181818] z-10" onClick={() => setActive(false)}>
      <nav className={styles.homeNav}>
        <MdKeyboardArrowLeft fill="white"
          className={styles.homeNav__arrows} />
        <MdKeyboardArrowRight fill="white" className={styles.homeNav__arrows} />
        <div className="absolute right-0 mr-7">
          <img  src={imgSrc.image} onError={imgSrc.handleError} alt="" className="w-8 h-8 rounded-full cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            setActive(!active)
          } 
           }/>
          {active && <div className="flex flex-col absolute right-0 mt-2">
          {isAuth && <ul onClick={(e) => {e.stopPropagation()}}
            className={"bg-[#282828] text-slate-100 w-52 rounded-lg p-2 overflow-hidden" + styles.userNavMenu}>
               <li className="p-1 border-b border-solid border-b-slate-400">{user?.email}</li>
              <Link href={`/home/author/${user?._id}`}>
              <li className="hover:bg-slate-400 cursor-pointer rounded-lg p-1 mt-1">Account</li>
              </Link>
              <li className="hover:bg-slate-400 cursor-pointer rounded-lg p-1">{!isAuthor ? 'Become a Creator': 'Create new Track'}</li>
              <li className="mt-3 border-t-[1px]  hover:bg-slate-400 cursor-pointer rounded-lg p-1">Log out</li>
            </ul>
            }
          </div>}
        </div>
      </nav>
    </header>
  )
}

export default NavBar
