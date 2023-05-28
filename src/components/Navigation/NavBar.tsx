'use client'

import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { redirect } from 'next/navigation';
import { auth } from "@/utils/api/userApi";
import { setUser } from "@/store/actions/userReducer";
import NavControl from "./NavControl";
import NavUserSection from "./NavUserSection";


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
            if(!user) {
              dispatch(setUser(data.user))
            }
          })
          .catch(e => {
            setError(true)
            alert(`error ${e}`)})
        }

        setIsLoading(false)
    }, [])

    if (error === true) redirect('/auth')


  return (
    <header className="h-20 w-full bg-[#181818] px-7 z-10" onClick={() => setActive(false)}>
        <nav className='flex items-center h-full'>
          <h1 className={`font-bold text-white text-center`}>Van Halen Wave</h1>
          <NavControl/>
          {!isLoading && user ? <NavUserSection active={active} onActive={setActive} user={user} key={user._id}/> : <span className="h-8 w-8 rounded-full bg-[#242424] animate-pulse"/>}
        </nav>
    </header>
  )
}

export default NavBar
