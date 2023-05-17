'use client'

import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/hooks/useRedux'
import { defaultImage } from '@/utils/constants'
import { useImage } from '@/hooks/useImage'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

const Player: React.FC = () => {
    const {track} = useAppSelector(state => state.track)
    const {user} = useAppSelector(state => state.user)
    const image = useImage(track?.picture, defaultImage.TRACK)
    const isFavorite = track?._id && user?.likedTracks.includes(track?._id)
    return (
        <div className='w-screen h-20 fixed bottom-0 bg-black z-20'>
            <div className='flex self-start w-[30%]'>
                <Image priority src={track?.picture ? 'http://localhost:5000/' + track.picture : defaultImage.TRACK} onError={image.handleError} className='p-2' width={80} height={80} alt='audio picture' />
                <div className='flex flex-col justify-center ml-1'>
                    <span className='text-white'>{track?.trackname}</span>
                    <span className='text-white'>{track?.author?.username || track?.author?.email}</span>
                </div>
                <span className='flex items-center ml-3'>
                    {isFavorite ?
                        <MdFavorite className='text-2xl fill-red-700 hover:scale-110 cursor-pointer active:scale-100' />
                        :
                        <MdFavoriteBorder  className='text-2xl fill-red-700 hover:scale-110 cursor-pointer active:scale-100' />
                    }

                </span>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Player