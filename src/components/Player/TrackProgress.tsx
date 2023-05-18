'use client'

import React from 'react'
import styles from '../../app/player.module.scss'
import { MdOutlineVolumeUp } from 'react-icons/md'

interface TrackProgresProps {
    width: string,
    left: number,
    right: number,
    volume?: boolean
}

const TrackProgress: React.FC<TrackProgresProps> = ({width, left, right, volume}) => {
    return (
        <div className={`text-white flex items-center gap-1 ${width}`}>
            {volume && <MdOutlineVolumeUp fill='white' className='text-2xl'/>}
            {!volume &&  <span>{left}</span>}
            <input type="range" min={0} max={right} value={left} className={styles.trackProgress}/>
            {!volume &&  <span>{right}</span>}
        </div>
    )
}

export default TrackProgress