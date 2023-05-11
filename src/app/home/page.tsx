'use client'

import { ITrack } from '@/types/types'
import styles from '../index.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getTracks } from '@/utils/getTracks'
import TrackList from '@/components/Tracks/TrackList'


export default function HomePage() {
      const {isLoading, data: tracks, error} = useQuery({queryKey: ['tracks'], queryFn: getTracks})



   return (  
       <section className='bg-[#333333] min-h-screen'>
           <div>
           {tracks && <TrackList tracks={tracks}/>}
           </div>
       </section>
  )
}
