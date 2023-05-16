import { ITrack } from '@/types/types'
import React from 'react'
import Image from 'next/image'
import { MdPlayArrow } from 'react-icons/md'


interface TrackItemProps {
    track: ITrack
}


const TrackItem: React.FC<TrackItemProps> = ({track}) => {
  return (
    <article className={`flex bg-[#181818] group/item hover:bg-[#242424] min-w-[480px] max-w-[580px] rounded-md overflow-hidden cursor-pointer duration-150`}>
       <div className='flex gap-4 w-full'>
       <Image priority src={track.picture ? `http://localhost:5000/${track.picture}`: `http://localhost:3000/defaultaudiopic.png`} width={80} height={80} alt='audio picture'/>
        <div className='flex flex-col text-white self-center'>
            <span className='text-sm'>{track.trackname}</span>
            <span className=''>{track.author.email}</span>
        </div>
       </div>
       <div className='group/edit self-center justify-self-end mr-4'>
       <MdPlayArrow fill='white' className=' group-hover/item:scale-100 group-hover/edit:scale-110 group-active/edit:scale-100 duration-150  text-5xl scale-0'/>
       </div>
    </article>
  )
}

export default TrackItem