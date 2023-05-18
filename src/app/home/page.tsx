'use client'

import { useQuery } from '@tanstack/react-query'
import { getTracks } from '@/utils/api/getTracks'
import TrackList from '@/components/Tracks/TrackList'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { redirect } from 'next/navigation'
import React from 'react'
import { auth } from '@/utils/api/userApi'
import { setUser } from '@/store/actions/userReducer'


export default function HomePage() {
    const dispatch = useAppDispatch()
    const { isLoading ,data: userRes, error} = useQuery(
        {
            queryKey: ['user'],
            queryFn: auth,
            onSuccess: () => {
                dispatch(setUser(userRes?.user));
            },
        })


        if (error) {
            redirect('/auth')
        }
    


    const { data: tracks } = useQuery({ queryKey: ['tracks'], queryFn: getTracks })

    return (
        <section className='bg-[#333333] min-h-screen'>
            <div>
                {tracks && <TrackList tracks={tracks} />}
            </div>
        </section>
    )
}
