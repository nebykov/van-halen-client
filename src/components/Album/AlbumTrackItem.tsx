import { useImage } from '@/hooks/useImage'
import { defaultImage } from '@/utils/constants'
import React from 'react'
import { MdPlayArrow } from 'react-icons/md'
import { ITrack } from '@/types/types'
import LikeButton from '../Player/Like/LikeButton'


interface AlbumTrackItemProps {
    track: ITrack,
    index: number
}

const AlbumTrackItem: React.FC<AlbumTrackItemProps> = ({index, track}) => {
    const imgSrc = useImage(track.picture, defaultImage.TRACK)
    return (
        <div className='grid grid-cols-4 rounded-md text-white font-semibold px-5 h-14 bg-inherit hover:bg-[#242424] cursor-pointer duration-150 items-center'>
            <div className='col-start-1 col-end-3 flex gap-4 items-center group/item'>
                <div className=''>{index}</div>
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <img src={imgSrc.image} onError={imgSrc.handleError} alt="Track picture" className='w-10' />
                        <MdPlayArrow fill='black' className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[0] text-2xl opacity-0 group-hover/item:opacity-100  group-hover/item:translate-y-[-50%] duration-150' />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm'>{track.trackname}</span>
                        <span className='text-xs'>{track?.author?.username ? track.author.username : track.author.email}</span>
                    </div>
                </div>
            </div>
            <div>album</div>
            <div>{track.date.substring(0, 10)}</div>
            <div className='col-start-5'>
                liked
            </div>
        </div>
    )
}

export default AlbumTrackItem