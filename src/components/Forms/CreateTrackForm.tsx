'use client'

import { useInput } from '@/hooks/useInput'
import React from 'react'
import Stepper from './Stepper'
import SubmitButton from './SubmitButton'
import Input from './Input/Input'
import UploadFile from './Input/UploadFile'
import { defaultImage } from '@/utils/constants'
import TrackResult from './TrackResult'
import ImageUpload from './ImageUpload'
import { useAppSelector } from '@/hooks/useRedux'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const CreateTrackForm = () => {
  const router = useRouter()
  const {user, isAuth} = useAppSelector(state => state.user)
  const trackName = useInput('')
  const [currentStep, setCurrentStep] = React.useState(1)
  const [picture, setPicture] = React.useState(null)
  const [audio, setAudio] = React.useState(null)

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1)
    } else {
       if (isAuth && user) {
        const formData = new FormData()
       formData.append('trackname', trackName.value)
       formData.append('authorId', user?._id)
       formData.append('picture', picture || '')
       formData.append('audio', audio || '')
       axios.post('http://localhost:5000/tracks', formData).then(data => router.push('/home')).catch(e => console.log(e))
       }
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }


  return (
    <div className='flex items-center flex-col gap-5 w-[450px] mx-auto my-0'>
      <Stepper activeStep={currentStep} steps={4} />
      <h1 className='font-bold text-2xl mt-6'>Creating Track</h1>
      {
        currentStep === 1 ? <Input onChange={trackName.onChange} placeholder='Enter The Trackname' type='text' value={trackName.value} /> :
          currentStep === 2 ?
            <UploadFile setFile={setPicture} accept='image/*'>
              <ImageUpload picture={picture} />
            </UploadFile> :
            currentStep === 3 ?
              <UploadFile setFile={setAudio} accept='audio/*'>
                <button className='border border-solid border-purple-700 h-16 w-40 rounded-xl hover:scale-110 active:scale-100 duration-150'>{audio ? 'Success' : 'Choose the song'}</button>
              </UploadFile>
              :
              <TrackResult picture={picture} trackname={trackName.value} />

      }
      <div className='flex justify-between w-full'>
        <SubmitButton submitTitle='Previous' onSubmit={handlePrev} around={true} />
        <SubmitButton submitTitle={currentStep === 4? 'Upload' : 'Next'} onSubmit={handleNext} around={true} />
      </div>
    </div>
  )
}

export default CreateTrackForm