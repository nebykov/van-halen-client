import React from 'react'
import styles from '../../app/player.module.scss'
import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious } from 'react-icons/md'

const TrackNav = ({track}: any) => {
    const pause = true
  return (
    <div className='flex justify-center items-center mt-2'>
        <MdSkipPrevious className='w-8 h-8 cursor-pointer fill-[#ffffffb4]'/>
        { !pause ?
         <MdPlayArrow fill='white' className='w-10 cursor-pointer'/>
         :
         <MdPause fill='white' className='w-10 h-10 cursor-pointer'/>}
         <MdSkipNext fill='white' className='w-8 h-8 cursor-pointer fill-[#ffffffb4]'/>
    </div>
  )
}

export default TrackNav