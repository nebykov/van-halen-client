'use client'

import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { redirect } from 'next/navigation';
import { auth } from "@/utils/api/userApi";
import { setUser } from "@/store/actions/userReducer";
import NavControl from "./NavControl";
import NavUserSection from "./NavUserSection";
import styles from '../../styles/navbar.module.scss'
import Link from "next/link";


const NavBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const [active, setActive] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const { user, isAuth } = useAppSelector(state => state.user)


  React.useEffect(() => {
    setIsLoading(true)
    if (!isAuth) {
      auth()
        .then(data => {
          setIsLoading(false)
          if (!user) {
            dispatch(setUser(data.user))
          }
        })
        .catch(e => {
          setError(true)
          setIsLoading(false)
          alert(`error ${e}`)
        })
      }

      setIsLoading(false)

  }, [user])

  if (error === true) redirect('/auth')


  return (
    <header className={styles.navBar} onClick={() => setActive(false)}>
      <Link href='/home'>
      <div className={styles.logoBar}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Van_Halen_logo.svg/1280px-Van_Halen_logo.svg.png" alt="" />
        <h1 className={`${window?.screen.width <= 400 && 'hidden'}`}>Van Halen Wave</h1>
      </div>
      </Link>
      <ul className={styles.navControl}>
        <NavControl />
      </ul>
      {!isLoading && user ?
        <NavUserSection active={active} onActive={setActive} user={user} key={user._id} />
        :
        <span className="h-8 w-8 rounded-full bg-[#242424] animate-pulse" />}
    </header>
  )
}

export default NavBar
