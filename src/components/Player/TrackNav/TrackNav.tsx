import { useAppSelector } from '@/hooks/useRedux';
import React, { CSSProperties } from 'react'
import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import ClipLoader from "react-spinners/ClipLoader";


const override: CSSProperties = {
  display: "block",
  margin: "0 5px",
  borderColor: "red",
};

interface TrackNavProps {
  isLoading: boolean,
  handlePause: () => void
}

const TrackNav: React.FC<TrackNavProps> = ({handlePause, isLoading}) => {
  const { pause } = useAppSelector(state => state.track)
  return (
    <div className='flex justify-center items-center mt-2' onClick={handlePause}>
        <MdSkipPrevious className='w-8 h-8 cursor-pointer fill-[#ffffffb4]'/>
        { 
         isLoading? 
         <ClipLoader
         color={'#333333'}
         loading={isLoading}
         cssOverride={override}
         size={30}
         aria-label="Loading Spinner"
         data-testid="loader"
         speedMultiplier={1}
       />
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