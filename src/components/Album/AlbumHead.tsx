import { useImage } from '@/hooks/useImage'
import { IUser } from '@/types/types'
import { defaultImage } from '@/utils/constants'
import React from 'react'

interface AlbumHeadProps {
    user: IUser,
    title: string
}

const AlbumHead: React.FC<AlbumHeadProps> = ({user, title}) => {
    const imgSrc = useImage(user.avatar, defaultImage.USER)
  return (
    <div className='flex items-center h-64 mb-7'>
        <div className='w-64 h-full text-white bg bg-black flex justify-center items-center rounded-lg'>
            Favorite
        </div>
        <div className='flex flex-col h-full justify-center ml-7'>
            <h1 className='text-7xl font-bold mb-8 text-white'>{title.length > 20? title.substring(0, 20) + '...' : title}</h1>
            <div className='min-h-6 min-w-16 max-w-xs flex items-center rounded-md p-3 bg-[#282828] gap-2'>
                <img src={imgSrc.image} onError={imgSrc.handleError} alt=""  className='w-4 h-4'/>
                <span className='text-[#ffffffde] text-base font-bold'>{user.username || user.email} :</span>
                <span className='font-bold text-sm text-[#ffffffa4]'>{user.likedTracks.length} songs</span>
            </div>
        </div>
    </div> 
  )
}

export default AlbumHead