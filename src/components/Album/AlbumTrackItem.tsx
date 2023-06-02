import { useImage } from '@/hooks/useImage'
import { defaultImage } from '@/utils/constants'
import React from 'react'
import { MdPlayArrow } from 'react-icons/md'
import { ITrack } from '@/types/types'
import styles from '../../styles/album.module.scss'
import LikeButton from '../Player/Like/LikeButton'


interface AlbumTrackItemProps {
    track: ITrack,
    index: number
}

const AlbumTrackItem: React.FC<AlbumTrackItemProps> = ({index, track}) => {
    const imgSrc = useImage(track.picture, defaultImage.TRACK)
    return (
        <div className={styles.albumTrackItem}>
            <div className={styles.albumTrackInfo}>
                <div>{index}</div>
                <div className={styles.trackNameBox}>
                    <div className='relative'>
                        <img src={imgSrc.image} onError={imgSrc.handleError} alt="Track picture" className='w-10' />
                        <MdPlayArrow fill='black' className={styles.playArrow} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm'>{track.trackname}</span>
                        <span className='text-xs'>{track?.author?.username ? track.author.username : track.author.email}</span>
                    </div>
                </div>
            </div>
            <div>album</div>
            <div>{track.date.substring(0, 10)}</div>
            <div className='col-start-5'>
                liked
            </div>
        </div>
    )
}

export default AlbumTrackItem