'use client'

import { useQuery } from '@tanstack/react-query'
import { getTracks } from '@/utils/api/getTracks'
import TrackList from '@/components/Tracks/TrackList'


export default function HomePage() {
    const { data: tracks } = useQuery({ queryKey: ['tracks'], queryFn: getTracks })

    return (
        <section className='bg-[#333333] min-h-screen'>
            <div>
                {tracks && <TrackList tracks={tracks} />}
            </div>
        </section>
    )
}
