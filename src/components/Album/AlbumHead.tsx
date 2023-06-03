'use client'

import { useImage } from '@/hooks/useImage'
import { IAlbum, IUser } from '@/types/types'
import { defaultImage } from '@/utils/constants'
import styles from '../../styles/album.module.scss'
import React from 'react'

interface AlbumHeadProps {
    user: IUser,
    title: string,
    userPage?: boolean,
    image?: string
    album?: IAlbum
}

const AlbumHead: React.FC<AlbumHeadProps> = ({ user, title, userPage, image, album }) => {
    const imgSrc = useImage(user.avatar, defaultImage.USER)
    const albumImage = useImage(image, defaultImage.ALBUM)
    return (
        <div className={styles.albumHeader}>
            <div className={`${styles.imageCard} ${userPage ? 'bg-white' : 'bg-black'}`}>
                {userPage ?
                    <img src={imgSrc.image} onError={imgSrc.handleError} alt='User' className='h-full w-full' />
                    : image ? <img src={albumImage.image} onError={albumImage.handleError} alt='Album' className='h-full w-full object-cover' /> :
                        <span>
                            Favorite
                        </span>
                }
            </div>
            <div className={styles.albumDescription}>
                <h1>{title.length > 20 ? title.substring(0, 20) + '...' : title}</h1>
                <div className={styles.userCard}>
                    {!userPage && <>
                        <img src={imgSrc.image} onError={imgSrc.handleError} alt="" className='w-4 h-4' />
                        <span className='text-[#ffffffde] text-base font-bold'>{user.username || user.email} :</span>
                    </>}
                    <span className='font-bold text-sm text-[#ffffffa4]'>
                        {album ? album.tracks.length : user.likedTracks.length} songs
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AlbumHead