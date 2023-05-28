import { defaultImage } from '@/utils/constants'
import React from 'react'

interface ImageUploadProps {
    picture: any
}

const ImageUpload: React.FC<ImageUploadProps> = ({picture}) => {
    return (
        <article className='relative w-20 h-20 rounded-full overflow-hidden cursor-pointer'>
            <span className='p-3 absolute inset-0 flex items-center justify-center bg-[#18181880] text-base text-white font-bold'>
                {picture === null ? 'Upload Image' : 'Success'}
            </span>
            <img src={picture === null ? defaultImage.TRACK : URL.createObjectURL(picture)} alt="" className='w-14 m-3' />
        </article>
    )
}

export default ImageUpload