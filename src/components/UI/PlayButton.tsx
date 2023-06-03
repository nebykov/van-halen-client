import React from 'react'
import styles from '../../styles/feed.module.scss'
import { MdPause, MdPlayArrow } from 'react-icons/md'
import { ITrack } from '@/types/types'

interface PlayButtonProps {
  track: ITrack,
  onPause: Function,
  activeTrack: ITrack | null,
  pause: boolean,
  size?: string,
  color?: string
}

const PlayButton: React.FC<PlayButtonProps> = ({track, onPause, activeTrack, pause, size, color}) => {
  return (
    <div 
    className={`${size? size : 'text-5xl'} ${color ? color : 'text-black'}`}
    onClick={(e) => onPause(e)}>
    {activeTrack === track && !pause?
     <MdPause/>
     :
     activeTrack === track && pause?
     <MdPlayArrow/>
     :
     <MdPlayArrow/>}
   </div>
  )
}

export default PlayButton


// ${styles.playIconContainer} ${activeTrack === track? 'scale-100' : 'scale-0'}