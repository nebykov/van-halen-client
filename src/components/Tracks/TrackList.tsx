import React from 'react'
import TrackItem from './TrackItem'
import styles from '../../styles/feed.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getTracks } from '@/utils/api/getTracks'


const TrackList = () => {
  const { data: tracks } = useQuery({ queryKey: ['tracks'], queryFn: getTracks })

  return (
    <div className={styles.feedContainer}>
      {tracks &&
        <>
          <h1 className={styles.feedTitle}>Tracks For You</h1>
          <div className={styles.trackList}>
            {tracks.map((track) => (
              <TrackItem key={track._id} track={track} />
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default TrackList