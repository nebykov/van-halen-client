'use client'

import AlbumHead from '@/components/Album/AlbumHead'
import AlbumTrackList from '@/components/Album/AlbumTrackList'
import { useAppSelector } from '@/hooks/useRedux'
import { ITrack } from '@/types/types'
import { getFavoriteTracks } from '@/utils/api/trackApi'
import React from 'react'


export default function FavoritePage() {
  const { user } = useAppSelector(state => state.user)
  const [tracks, setTracks] = React.useState<ITrack[]>([])

  React.useEffect(() => {
    if(user !== null) {
      getFavoriteTracks(user._id)
      .then(data => setTracks(data))
    }
  },[user])
  return (
    <>
      {user && tracks.length &&
        <div className="mx-[28px]">
          <AlbumHead user={user} userPage={false} title='Favorite Songs'/>
          <AlbumTrackList tracks={tracks}/>
        </div>
      }
    </>
  )
}