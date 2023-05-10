import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from '../app/index.module.scss'
import React from "react";


const NavBar: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <header className="h-20 w-full bg-black bg-opacity-90 ">
             <nav className={styles.homeNav}>
               <MdKeyboardArrowLeft fill="white" 
               className={styles.homeNav__arrows}/>
               <MdKeyboardArrowRight fill="white" className={styles.homeNav__arrows}/>
             </nav>
        </header>
      </div>
    </div>
  )
}

export default NavBar
