import { ITrack } from '@/types/types'
import React from 'react'
import TrackItem from './TrackItem'
import { useQuery } from '@tanstack/react-query'
import { getTracks } from '@/utils/api/getTracks'


const TrackList= () => {
  const { data: tracks } = useQuery({ queryKey: ['tracks'], queryFn: getTracks })

  return (
    <div className='container m-auto'>
      <h1 className='text-3xl ml-3 font-bold text-white pt-3'>Tracks For You</h1>
        {tracks && 
          <div className='flex flex-wrap gap-5 m-auto p-5'>
          {tracks.map((track) => (
            <TrackItem key={track._id} track={track} />
          ))}
        </div>
        }
    </div>
  )
}

export default TrackList