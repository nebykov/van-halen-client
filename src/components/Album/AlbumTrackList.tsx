import React from 'react'
import AlbumTrackItem from './AlbumTrackItem'
import { ITrack } from '@/types/types'

interface AlbumTrackListProps {
    tracks: ITrack[]
}


const AlbumTrackList: React.FC<AlbumTrackListProps> = ({tracks}) => {
    return (
        <div className='m-5'>
            <div className='border-b border-solid border-[#ffffffa2] mb-5'>
                <div className='grid grid-cols-4 text-white font-semibold px-5'>
                    <div className='col-start-1 col-end-3 flex gap-4'>
                        <div className=''>#</div>
                        <div className=''>name</div>
                    </div>
                    <div>album</div>
                    <div>date</div>
                    <div className='col-start-5'>liked</div>
                </div>
            </div>
            {tracks.map((track, index) => (
                <AlbumTrackItem key={track._id} index={index+1} track={track}/>
            ))}
        </div>
    )
}

export default AlbumTrackList