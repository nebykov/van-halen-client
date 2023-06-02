import { getAlbums } from '@/utils/api/getTracks'
import React from 'react'
import AlbumFeedCard from './AlbumFeedCard'
import styles from '../../../styles/feed.module.scss'
import { useQuery } from '@tanstack/react-query'

const AlbumFeedList = () => {
  const { data: albums } = useQuery({ queryKey: ['albums'], queryFn: getAlbums })


  return (
    <div className={styles.feedContainer}>
      {albums &&
        <>
          <h1 className={styles.feedTitle}>The Best Albums</h1>
          <div className={styles.albumList}>
            {albums?.map((album) => (
              <AlbumFeedCard album={album} />
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default AlbumFeedList