import { defaultImage } from '@/utils/constants'
import React from 'react'
import ImageUpload from './ImageUpload'

interface TrackResultProps {
    trackname: string,
    picture: any
}

const TrackResult: React.FC<TrackResultProps> = ({trackname, picture}) => {
    return (
        <div className='flex items-center gap-2 w-52 p-2 rounded-lg border border-solid border-purple-800'>
            <ImageUpload picture={picture}/>
            <span>{trackname}</span>
        </div>
    )
}

export default TrackResult