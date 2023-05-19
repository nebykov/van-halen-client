import { IUser } from '@/types/types'
import React from 'react'

interface AuthorCardProps {
    author?: IUser | null
}

const AuthorCard: React.FC<AuthorCardProps> = ({author}) => {
  return (
    <div className='w-96 h-52 bg-[#242424] rounded-lg'>
        <img src={`http://localhost:5000/${author?.avatar}`} alt="Author" />
        <span>{author?.username}</span>
        <span>artist</span>
    </div>
  )
}

export default AuthorCard