import { ITrack } from '@/types/types'
import React from 'react'
import TrackItem from './TrackItem'
import { useQuery } from '@tanstack/react-query'
import { getTracks } from '@/utils/api/getTracks'


const TrackList= () => {
  const { data: tracks } = useQuery({ queryKey: ['tracks'], queryFn: getTracks })
  return (
    <div className='container first-letter:relative m-auto'>
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