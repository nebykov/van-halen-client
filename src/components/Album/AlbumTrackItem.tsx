import { useImage } from '@/hooks/useImage'
import { defaultImage } from '@/utils/constants'
import React from 'react'
import { MdPlayArrow } from 'react-icons/md'
import { ITrack } from '@/types/types'
import styles from '../../styles/album.module.scss'
import LikeButton from '../Player/Like/LikeButton'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { pauseTrack, playTrack, setTrack } from '@/store/actions/tracksReducer'
import PlayButton from '../UI/PlayButton'


interface AlbumTrackItemProps {
    track: ITrack,
    index: number
}

const AlbumTrackItem: React.FC<AlbumTrackItemProps> = ({index, track}) => {
    const {track: activeTrack, pause} = useAppSelector(state => state.track)
    const dispatch = useAppDispatch()
    const imgSrc = useImage(track.picture, defaultImage.TRACK)

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
        <div className={styles.albumTrackItem} onClick={() => handleTrack(track)}>
            <div className={styles.albumTrackInfo}>
                <div>{index}</div>
                <div className={styles.trackNameBox}>
                    <div className='relative'>
                        <img src={imgSrc.image} onError={imgSrc.handleError} alt="Track picture" className='w-10 h-10' />
                        <div className={styles.playArrow}>
                            <PlayButton activeTrack={activeTrack} onPause={handlePause} pause={pause} track={track} size='text-2xl'/>
                        </div>
                    </div>
                    <div className='flex flex-col w-6'>
                        <span className='text-sm'>{track.trackname}</span>
                        <span className='text-xs'>{track?.author?.username ? track.author.username : track.author.email}</span>
                    </div>
                </div>
            </div>
            {window.screen.width >= 400 &&
            <>
            <div>album</div>
            <div>{track.date.substring(0, 10)}</div>
            </>
            }
            <div className='col-start-5'>
                liked
            </div>
        </div>
    )
}

export default AlbumTrackItem