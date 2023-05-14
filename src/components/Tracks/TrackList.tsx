import { ITrack } from '@/types/types'
import React from 'react'
import TrackItem from './TrackItem'

interface TracksListProps {
  tracks: ITrack[]
}

const TrackList: React.FC<TracksListProps> = ({ tracks }) => {

  return (
    <div className='container first-letter:relative m-auto'>
      <div className='flex flex-wrap gap-5 m-auto p-5'>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </div>
    </div>
  )
}

export default TrackList