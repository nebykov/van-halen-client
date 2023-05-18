import { ITrack } from '@/types/types'
import React from 'react'
import Image from 'next/image'
import { MdPlayArrow, MdPause } from 'react-icons/md'
import styles from '../../app/track.module.scss'
import { useImage } from '@/hooks/useImage'
import { defaultImage } from '@/utils/constants'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setPause, setTrack } from '@/store/actions/tracksReducer'


interface TrackItemProps {
    track: ITrack
}


const TrackItem: React.FC<TrackItemProps> = ({track}) => {
  const image = useImage(track.picture, defaultImage.TRACK)
  const {track: activeTrack, pause} = useAppSelector(state => state.track)
  const dispatch = useAppDispatch()

  const handleTrack = () => {
    dispatch(setTrack(track))
  }

  const handlePause = (action: boolean) => {
    dispatch(setPause(action))
  }

  return (
    <article className={ `${styles.trackItem} ${activeTrack !== track? 'bg-[#181818]' : 'bg-[#242424]'}`} onClick={handleTrack}>
       <div className='flex gap-4 w-full'>
       <Image priority src={image.image} onError={image.handleError} width={80} height={80} alt='audio picture'/>
        <div className='flex flex-col text-white self-center'>
            <span className='text-sm'>{track.trackname}</span>
            <span className=''>{track.author.email}</span>
        </div>
       </div>
       <div className={`${styles.playIconContainer} ${activeTrack === track? 'scale-100' : 'scale-0'}`}>
        {activeTrack === track && pause?
         <MdPause fill='white' className={styles.playIcon} onClick={() => handlePause(false)}/>
         :
         activeTrack === track && !pause?
         <MdPlayArrow fill='white' className={styles.playIcon} onClick={() => handlePause(true)}/>
         :
         <MdPlayArrow fill='white' className={styles.playIcon} onClick={() => handlePause(true)}/>}
       </div>
    </article>
  )
}

export default TrackItem