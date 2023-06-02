import { useImage } from '@/hooks/useImage'
import { IAlbum } from '@/types/types'
import { defaultImage } from '@/utils/constants'
import styles from '../../../styles/feed.module.scss'
import Link from 'next/link'
import React from 'react'

interface AlbumFeedCardProps {
  album: IAlbum
}

const AlbumFeedCard: React.FC<AlbumFeedCardProps> = ({ album }) => {
  const albumImg = useImage(album.picture, defaultImage.ALBUM)
  return (
    <article className={styles.albumCard}>
      <Link href={`/home/library/${album._id}`}>
        <img
          src={albumImg.image}
          onError={albumImg.handleError}
          alt="Album"
        />
        <div
          className={styles.cardContent}
        >
          <h3>
            {album.name}
          </h3>
          <Link href={`/home/author/${album.author._id}`}>
            <span>
              Album: {album.author.username || album.author.email}
            </span>
          </Link>
        </div>
      </Link>
    </article>
  )
}

export default AlbumFeedCard