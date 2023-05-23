'use client'

import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { redirect } from 'next/navigation';
import { useQuery } from "@tanstack/react-query";
import { auth } from "@/utils/api/userApi";
import { setUser } from "@/store/actions/userReducer";
import NavControl from "./NavControl";
import NavUserSection from "./NavUserSection";


const NavBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const [active, setActive] = React.useState(false)
  const { user } = useAppSelector(state => state.user)


  const { data: userRes, refetch } = useQuery(
    {
      queryKey: ['user'],
      queryFn: auth,
      onSuccess: () => {
        refetch()
        dispatch(setUser(userRes?.user));
      },
      onError: (e) => {
        alert(e)
        localStorage.removeItem('token')
        redirect('/auth')
      }
    })


  return (
    <header className="h-20 w-full bg-[#181818] px-7 z-10" onClick={() => setActive(false)}>
      {user &&
        <nav className='flex items-center h-full'>
          <h1 className={`font-bold text-white text-center`}>Van Halen Wave</h1>
          <NavControl/>
          <NavUserSection active={active} onActive={setActive} user={user} key={user._id}/>
        </nav>
      }
    </header>
  )
}

export default NavBar
