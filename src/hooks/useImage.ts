'use client'

import { defaultImage } from '@/utils/constants'
import React from 'react'


export const useImage = (initialImage: string | undefined, defaultImage: defaultImage) => {
    const [image, setImage] = React.useState('')


    React.useEffect(() => {
        setImage(`http://localhost:5000/${initialImage}`)
        
         if (image === undefined) {
            setImage(defaultImage)
         }

    }, [initialImage])


     const handleError = () => {
          setImage(defaultImage)
    }


    return {
        image, handleError
    }
}