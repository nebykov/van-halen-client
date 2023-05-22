'use client'

import AlbumHead from '@/components/Album/AlbumHead'
import AlbumTrackList from '@/components/Album/AlbumTrackList'
import { useAppSelector } from '@/hooks/useRedux'
import { ITrack } from '@/types/types'
import { getFavoriteTracks } from '@/utils/api/getTracks'
import { useQuery } from '@tanstack/react-query'
import React from 'react'


export default function FavoritePage() {
  const { user } = useAppSelector(state => state.user)
  const {data: tracks} =  useQuery({queryKey: ['likedTracks'], queryFn: () => getFavoriteTracks(String(user?._id) || '')})


  return (
    <>
      {user && tracks &&
        <div className="mx-[28px]">
          <AlbumHead user={user} title='Favorite Songs'/>
          <AlbumTrackList tracks={tracks}/>
        </div>
      }
    </>
  )
}