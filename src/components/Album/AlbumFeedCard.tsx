import { useImage } from '@/hooks/useImage'
import { IAlbum } from '@/types/types'
import { defaultImage } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

interface AlbumFeedCardProps {
  album: IAlbum
}

const AlbumFeedCard: React.FC<AlbumFeedCardProps> = ({ album }) => {
  const albumImg = useImage(album.picture, defaultImage.ALBUM)
  return (
    <article className='bg-[#181818] rounded-md overflow-hidden cursor-pointer hover:scale-110 hover:opacity-80 duration-150'>
      <Link href={`/home/library/${album._id}`}>
      <img src={albumImg.image} onError={albumImg.handleError} alt="Album" className='w-40 h-40' />
      <div className='m-2 text-white'>
        <h3 className='cursor-pointer hover:underline'>
          {album.name}
        </h3>
        <Link href={`/home/author/${album.author._id}`}>
        <span className='text-sm text-[#b4b4b4] cursor-pointer hover:underline'>
          Album: {album.author.username || album.author.email}
        </span>
        </Link>
      </div>
      </Link>
    </article>
  )
}

export default AlbumFeedCard