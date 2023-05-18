'use client'

import React from 'react'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { defaultImage } from '@/utils/constants'
import { useImage } from '@/hooks/useImage'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import { removeTrackFromFav, trackToFav } from '@/utils/api/userApi'
import { setUser } from '@/store/actions/userReducer'

const Player: React.FC = () => {
    const { track } = useAppSelector(state => state.track)
    const { user } = useAppSelector(state => state.user)
    const [isFavorite, setIsFavorite] = React.useState(false)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        const favData = track?._id && user?.likedTracks.includes(track?._id)
        setIsFavorite(favData || false)
    }, [track])


    const { data: userLike, refetch: refetchLike } = useQuery({
        queryKey: ['userLike'],
        queryFn: () => trackToFav(track?._id || ''),
        refetchOnWindowFocus: false,
        enabled: false,
    })


    const { data: userDis, refetch: refetchDislike } = useQuery({
        queryKey: ['userLike'],
        queryFn: () => removeTrackFromFav(track?._id || ''),
        refetchOnWindowFocus: false,
        enabled: false,
    })

    const image = useImage(track?.picture, defaultImage.TRACK)


    const handleFavorite = async () => {
        if (track?._id) {
            if (isFavorite) {
                refetchDislike()
                dispatch(setUser(userDis))
                setIsFavorite(false)
            } else {
                refetchLike()
                dispatch(setUser(userLike))
                setIsFavorite(true)
            }
        }
    }

    return (
        <>
            {track &&
                <div className='w-screen h-20 fixed bottom-0 bg-black z-20'>
                    <div className='flex self-start w-[30%]'>
                        <Image priority src={image.image} onError={image.handleError} className='p-2' width={80} height={80} alt='audio picture' />
                        <div className='flex flex-col justify-center ml-1'>
                            <span className='text-white'>{track?.trackname}</span>
                            <span className='text-white'>{track?.author?.username || track?.author?.email}</span>
                        </div>
                        <span className='flex items-center ml-3'>
                            {isFavorite ?
                                <MdFavorite className='text-2xl fill-red-700 hover:scale-110 cursor-pointer active:scale-100' onClick={handleFavorite} />
                                :
                                <MdFavoriteBorder className='text-2xl fill-red-700 hover:scale-110 cursor-pointer active:scale-100' onClick={handleFavorite} />
                            }

                        </span>
                    </div>
                    <div></div>
                    <div></div>
                </div>}

        </>
    )
}

export default Player