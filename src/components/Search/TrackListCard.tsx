import { useImage } from '@/hooks/useImage'
import { ITrack } from '@/types/types'
import { defaultImage } from '@/utils/constants'
import React from 'react'
import { MdPlayArrow } from 'react-icons/md'

interface TrackListProps {
  track: ITrack
}

const TrackListCard: React.FC<TrackListProps> = ({track}) => {
  const imgSrc = useImage(track.picture, defaultImage.TRACK)
  return (
    <div className='bg-inherit mr-5 p-2 cursor-pointer group/item duration-150 hover:bg-[#242424] rounded-md'>
      <div className='flex gap-2'>
        <div className='relative'>
        <img src={imgSrc.image} onError={imgSrc.handleError} alt="Track picture" className='w-10'/>
        <MdPlayArrow fill='black' className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[0] text-2xl opacity-0 group-hover/item:opacity-100  group-hover/item:translate-y-[-50%] duration-150'/>
        </div>
        <div className='flex flex-col'>
          <span className='text-white font-medium'>{track.trackname}</span>
          <span className='text-[#ffffffb4] text-xs'>{track.author.username || track.author.email}</span>
        </div>
      </div>
    </div>
  )
}

export default TrackListCard