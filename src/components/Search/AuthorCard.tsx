import { useImage } from '@/hooks/useImage'
import { IUser } from '@/types/types'
import { defaultImage } from '@/utils/constants'
import styles from '../../styles/search.module.scss'
import React from 'react'

interface AuthorCardProps { 
  author?: IUser | null
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  const imgSrc = useImage(author?.avatar, defaultImage.USER)
  return (
    <div className={styles.authorCard}>
      <img src={imgSrc.image} onError={imgSrc.handleError} alt="Author" className='w-20' />
      {author?.username ?
        <>
          <span className='text-white text-3xl font-bold'>{author?.username}</span>
          <span className='bg-[#181818] w-28 text-white py-2 flex justify-center rounded-2xl hover:scale-110 duration-150 cursor-pointer'>artist</span>
        </>
        :
        <span className='text-white'>User was not Found</span>
      }
    </div>
  )
}

export default AuthorCard