import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'


interface LikeProps {
    isFavorite: boolean,
    onLike: () => void
}


const Like: React.FC<LikeProps> = ({isFavorite, onLike}) => {
    return (
        <div>
            {isFavorite ? <MdFavorite className='text-2xl fill-red-700 hover:scale-110 cursor-pointer active:scale-100' onClick={onLike}/>
                                :
            <MdFavoriteBorder className='text-2xl fill-red-700 hover:scale-110 cursor-pointer active:scale-100' onClick={onLike}/>}
        </div>
    )
}

export default Like;