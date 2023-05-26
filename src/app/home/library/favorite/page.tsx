'use client'

import AlbumHead from '@/components/Album/AlbumHead'
import AlbumTrackList from '@/components/Album/AlbumTrackList'
import { useAppSelector } from '@/hooks/useRedux'
import { getFavoriteTracks } from '@/utils/api/getTracks'
import React from 'react'


export default async function FavoritePage() {
  const { user } = useAppSelector(state => state.user)
  // const tracks = user && await getFavoriteTracks(user?._id)

  // React.useEffect(() => {
  //   if(user) {
  //     getFavoriteTracks(user._id)
  //     .then(data => console.log(data))
  //   }
  // },[])
  return (
    <>
    <h1>Logo</h1>
      {/* {user && tracks &&
        <div className="mx-[28px]">
          <AlbumHead user={user} userPage={false} title='Favorite Songs'/>
          <AlbumTrackList tracks={tracks}/>
        </div>
      } */}
    </>
  )
}