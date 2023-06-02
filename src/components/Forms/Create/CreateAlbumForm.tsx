import React from 'react'
import TrackResult from '../TrackResult'
import UploadFile from '../Input/UploadFile'
import ImageUpload from '../ImageUpload'
import SubmitButton from '../SubmitButton'
import Input from '../Input/Input'
import axios from 'axios'
import { useAppSelector } from '@/hooks/useRedux'
import { useInput } from '@/hooks/useInput'
import { useRouter } from 'next/navigation'
import Stepper from '@/components/UI/Stepper'

const CreateAlbumForm = () => {
    const router = useRouter()
    const { user} = useAppSelector(state => state.user)
    const albumName = useInput('')
    const [currentStep, setCurrentStep] = React.useState(1)
    const [picture, setPicture] = React.useState(null)
  
    const handleNext = () => {
      if (currentStep < 3) {
        setCurrentStep(prev => prev + 1)
      } else {
         if (user) {
            console.log('клик')
          const formData = new FormData()
         formData.append('name', albumName.value)
         formData.append('authorId', user?._id)
         formData.append('picture', picture || '')
         axios.post('http://localhost:5000/albums/create', formData).then(data => router.push('/home')).catch(e => console.log(e))
         }
      }
    }
  
    const handlePrev = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1)
      }
    }
  
  
    return (
      <>
        <Stepper activeStep={currentStep} steps={3} />
        <h1 className='font-bold text-2xl mt-6'>Creating an Album</h1>
        {
          currentStep === 1 ? <Input onChange={albumName.onChange} placeholder='Enter The Album`s Name' type='text' value={albumName.value} /> :
            currentStep === 2 ?
              <UploadFile setFile={setPicture} accept='image/*'>
                <ImageUpload picture={picture} />
              </UploadFile> :
                <TrackResult picture={picture} trackname={albumName.value} />
  
        }
        <div className='flex justify-between w-full'>
          <SubmitButton submitTitle='Previous' onSubmit={handlePrev} around={true} />
          <SubmitButton submitTitle={currentStep === 4? 'Upload' : 'Next'} onSubmit={handleNext} around={true} />
        </div>
      </>
    )
}

export default CreateAlbumForm