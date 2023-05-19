import { useImage } from '@/hooks/useImage'
import { ITrack } from '@/types/types'
import { defaultImage } from '@/utils/constants'
import React from 'react'
import LikeButton from '../Like/LikeButton'

interface TrackControlProps {
    track: ITrack
}

const TrackControl: React.FC<TrackControlProps> = ({track}) => {
    const image = useImage(track?.picture, defaultImage.TRACK)
    return (
        <div className='flex self-start'>
            <img src={image.image} onError={image.handleError} className='p-2' width={80} height={80} alt='audio picture' />
            <div className='flex flex-col justify-center ml-1'>
                <span className='text-white'>{track?.trackname}</span>
                <span className='text-white'>{track?.author?.username || track?.author?.email}</span>
            </div>
            <span className='flex items-center ml-3'>
                <LikeButton track={track} />
            </span>
        </div>
    )
}

export default TrackControl