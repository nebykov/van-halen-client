import React from 'react'
import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious } from 'react-icons/md'


interface TrackNavProps {
  isLoading: boolean,
  pause: boolean,
  handlePause: () => void
}

const TrackNav: React.FC<TrackNavProps> = ({pause, handlePause, isLoading}) => {
  return (
    <div className='flex justify-center items-center mt-2' onClick={handlePause}>
        <MdSkipPrevious className='w-8 h-8 cursor-pointer fill-[#ffffffb4]'/>
        { 
         isLoading? 
         <svg className='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'>
            <circle className="path" cx="25" cy="25" r="20" fill="white" stroke-width="5"></circle>
         </svg>
         :
        pause && !isLoading ?
         <MdPlayArrow fill='white' className='w-10 h-10 cursor-pointer'/>
         :
         <MdPause fill='white' className='w-10 h-10 cursor-pointer'/>}
         <MdSkipNext fill='white' className='w-8 h-8 cursor-pointer fill-[#ffffffb4]'/>
    </div>
  )
}

export default TrackNav