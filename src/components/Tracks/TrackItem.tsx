import { ITrack } from '@/types/types'
import React from 'react'
import { MdPlayArrow, MdPause } from 'react-icons/md'
import styles from '../../app/track.module.scss'
import { useImage } from '@/hooks/useImage'
import { defaultImage } from '@/utils/constants'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { pauseTrack, playTrack, setPause, setTrack } from '@/store/actions/tracksReducer'


interface TrackItemProps {
    track: ITrack
}


const TrackItem: React.FC<TrackItemProps> = ({track}) => {
  const image = useImage(track.picture, defaultImage.TRACK)
  const {track: activeTrack, pause} = useAppSelector(state => state.track)
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
    <article className={ `${styles.trackItem} ${activeTrack !== track? 'bg-[#181818]' : 'bg-[#242424]'}`} onClick={() => handleTrack(track)}>
       <div className='flex gap-4 w-full'>
       <img src={image.image} onError={image.handleError} width={80} height={80} alt='audio picture'/>
        <div className='flex flex-col text-white self-center'>
            <span className='text-sm'>{track.trackname}</span>
            <span className=''>{track.author.email}</span>
        </div>
       </div>
       <div className={`${styles.playIconContainer} ${activeTrack === track? 'scale-100' : 'scale-0'}`} onClick={(e) => handlePause(e)}>
        {activeTrack === track && !pause?
         <MdPause fill='white' className={styles.playIcon}/>
         :
         activeTrack === track && pause?
         <MdPlayArrow fill='white' className={styles.playIcon}/>
         :
         <MdPlayArrow fill='white' className={styles.playIcon}/>}
       </div>
    </article>
  )
}

export default TrackItem