'use client'


import AlbumFeedList from '@/components/Album/AlbumFeedList'
import TrackList from '@/components/Tracks/TrackList'


export default function HomePage() {
    return (
        <section className='bg-[#333333] min-h-screen'>
            <div>
               <TrackList/>
               <AlbumFeedList/>
            </div>
        </section>
    )
}
