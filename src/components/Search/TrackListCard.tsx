import { useImage } from '@/hooks/useImage'
import { ITrack } from '@/types/types'
import { defaultImage } from '@/utils/constants'
import React from 'react'
import { MdPlayArrow } from 'react-icons/md'
import PlayButton from '../UI/PlayButton'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { pauseTrack, playTrack, setTrack } from '@/store/actions/tracksReducer'

interface TrackListProps {
  track: ITrack
}

const TrackListCard: React.FC<TrackListProps> = ({track}) => {
  const {track: activeTrack, pause} = useAppSelector(state => state.track)
  const imgSrc = useImage(track.picture, defaultImage.TRACK)
  const dispatch = useAppDispatch()

  const handleTrack = (value: ITrack) => {
    if (activeTrack !== value) {
      dispatch(setTrack(value))
    }
  }

  const handlePause = (e: React.MouseEvent<HTMLDivElement>) => {
    activeTrack !== track && dispatch(setTrack(track))
      e.stopPropagation()
      if (pause) {
        dispatch(playTrack())
      }  else {
        dispatch(pauseTrack())
      }
  }

  return (
    <div className='bg-inherit mr-5 p-2 cursor-pointer group/item duration-150 hover:bg-[#242424] rounded-md z-10' onClick={() => handleTrack(track)}>
      <div className='flex gap-2'>
        <div className='relative'>
        <img src={imgSrc.image} onError={imgSrc.handleError} alt="Track picture" className='w-10 z-10'/>
        {/* <MdPlayArrow fill='black' className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[0] text-2xl opacity-0 group-hover/item:opacity-100  group-hover/item:translate-y-[-50%] duration-150'/> */}
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[0] text-2xl opacity-0 group-hover/item:opacity-100  group-hover/item:translate-y-[-50%] duration-150'>
        <PlayButton activeTrack={activeTrack} pause={pause} track={track} size='text-2xl' onPause={handlePause}/>
        </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-white font-medium'>{track.trackname}</span>
          <span className='text-[#ffffffb4] text-xs'>{track.author.username || track.author.email}</span>
        </div>
      </div>
    </div>
  )
}

export default TrackListCard