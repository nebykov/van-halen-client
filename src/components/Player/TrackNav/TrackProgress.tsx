import React from 'react'
import styles from '../../../app/player.module.scss'
import { MdOutlineVolumeUp } from 'react-icons/md'

interface TrackProgresProps {
    width: string,
    left: number,
    right: number,
    onVolume: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isVolume?: boolean
}

const TrackProgress: React.FC<TrackProgresProps> = ({ width, left, right, isVolume, onVolume}) => {
    return (
        <div className={`text-white flex items-center gap-1 ${width}`}>
            {isVolume && <MdOutlineVolumeUp fill='white' className='text-2xl' />}
            {!isVolume && <span>{left}</span>}
            <input
                type="range"
                min={0} 
                max={right}
                value={left}
                onChange={onVolume}
                className={styles.trackProgress} />
            {!isVolume && <span>{right}</span>}
        </div>
    )
}

export default TrackProgress