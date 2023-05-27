'use client'

import RegistrationForm from '@/components/Forms/RegistrationForm';
import Stepper from '@/components/Forms/Stepper';
import { useRouter } from 'next/navigation';
import React from 'react';



const Registration = () => {
    const router = useRouter()
    const [currentStep, setCurrentStep] = React.useState(1)


    return (
        <div>
            <Stepper steps={3} activeStep={currentStep}/>
            <div className='w-[450px] m-auto'>
                <RegistrationForm title='Registration' submitTitle='Next' step={currentStep} onStep={(value) => setCurrentStep(value)}/>
                <div className='flex flex-col gap-4 mt-4'>
                    <h3 className='self-center'>Already have an account?</h3>
                    <button
                        onClick={() => router.push('/auth')}
                        className='w-full bg-white p-3 border-[2px] hover:scale-105 duration-150 ease-in-out border-solid rounded-3xl border-[#D9DADC]'>
                        LOG IN FOR VH WAVE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Registration;