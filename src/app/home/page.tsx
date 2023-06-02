'use client'

import AlbumFeedList from '@/components/Album/Feed/AlbumFeedList'
import TrackList from '@/components/Tracks/TrackList'


export default function HomePage() {
    return (
        <section className='bg-[#333333] min-h-screen min-w-full'>
            <div>
               <TrackList/>
               <AlbumFeedList/>
            </div>
        </section>
    )
}
