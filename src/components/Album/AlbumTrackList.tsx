'use client'

import AlbumTrackItem from './AlbumTrackItem'
import styles from '../../styles/album.module.scss'
import React from 'react'
import { ITrack } from '@/types/types'


interface AlbumTrackListProps {
    tracks: ITrack[],
}


const AlbumTrackList: React.FC<AlbumTrackListProps> = ({tracks}) => {
    return (
        <div className={styles.albumTrackContainer}>
            <div className={styles.albumTrackHeader}>
                <div className={styles.albumTrackColumns}>
                    <div className={styles.columnName}>
                        <div>#</div>
                        <div>name</div>
                    </div>
                   {window.screen.width >= 400 &&
                   <>
                    <div>album</div>
                    <div>date</div>
                   </>
                   }
                    <div className={styles.columnLike}>liked</div>
                </div>
            </div>
            {tracks?.map((track, index) => (
                <AlbumTrackItem key={track._id} index={index+1} track={track}/>
            ))}
        </div>
    )
}

export default AlbumTrackList