import { ITrack } from '@/types/types'
import React from 'react'
import { MdPlayArrow, MdPause } from 'react-icons/md'
import styles from '../../styles/feed.module.scss'
import { useImage } from '@/hooks/useImage'
import { defaultImage } from '@/utils/constants'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { pauseTrack, playTrack, setTrack } from '@/store/actions/tracksReducer'
import PlayButton from '../UI/PlayButton'


interface TrackItemProps {
  track: ITrack
}


const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  const image = useImage(track.picture, defaultImage.TRACK)
  const { track: activeTrack, pause } = useAppSelector(state => state.track)
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
    } else {
      dispatch(pauseTrack())
    }
  }

  return (
    <article className={`${styles.trackItem} ${activeTrack !== track ? 'bg-[#181818]' : 'bg-[#242424]'}`} onClick={() => handleTrack(track)}>
      <div className={styles.contentBlock}>
        <img src={image.image} onError={image.handleError} alt='audio picture' />
        <div className={styles.description}>
          <span className={styles.trackName}>{track.trackname}</span>
          <span className={styles.trackAuthor}>{track.author.email}</span>
        </div>
      </div>
      <div className={`${styles.playIconContainer} ${activeTrack === track? 'scale-100' : 'scale-0'}`}>
        <PlayButton onPause={(e: React.MouseEvent<HTMLDivElement>) => handlePause(e)} track={track} activeTrack={activeTrack} pause={pause} color='text-white'/>
      </div>
      {/* <div className={`${styles.playIconContainer} ${activeTrack === track? 'scale-100' : 'scale-0'}`} onClick={(e) => handlePause(e)}>
        {activeTrack === track && !pause?
         <MdPause/>
         :
         activeTrack === track && pause?
         <MdPlayArrow/>
         :
         <MdPlayArrow/>}
       </div> */}
    </article>
  )
}

export default TrackItem