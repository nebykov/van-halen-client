import { ITrack } from '@/types/types'
import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface TrackItemProps {
    track: ITrack
}


const TrackItem: React.FC<TrackItemProps> = ({track}) => {
  return (
    <article className={`${inter.className} flex bg-[#181818] hover:bg-[#242424] min-w-[480px] max-w-[580px] rounded-md overflow-hidden gap-4 cursor-pointer duration-150`}>
        <Image priority src={track.picture ? `http://localhost:5000/${track.picture}`: `http://localhost:3000/defaultaudiopic.png`} width={80} height={80} alt='audio picture'/>
        <div className='flex flex-col text-white self-center'>
            <span className='text-sm'>{track.trackname}</span>
            <span className=''>{track.author.email}</span>
        </div>
    </article>
  )
}

export default TrackItem