import { IAlbum } from '@/types/types'
import { getAlbums } from '@/utils/api/getTracks'
import React from 'react'
import AlbumFeedCard from './AlbumFeedCard'

const AlbumFeedList = () => {
  const [albums, setAlbums] = React.useState<IAlbum[]>([])

  React.useEffect(() => {
    getAlbums().then(data => setAlbums(data))
  }, [])
  return (
    <div className='container m-auto'>
      <h1 className='text-3xl ml-3 font-bold text-white'>The Best Albums</h1>
      <div className='flex flex-wrap gap-7 m-auto p-5'>
        {albums.map((album) => (
          <AlbumFeedCard album={album} />
        ))}
      </div>
    </div>
  )
}

export default AlbumFeedList