import React from 'react'
import { MdDoneOutline } from 'react-icons/md'

interface StepperProps {
    steps: number,
    activeStep: number
}

const Stepper: React.FC<StepperProps> = ({steps, activeStep}) => {
    return (
        <div className='flex items-center justify-center mt-5'>
            {Array.from({ length: steps }, (v, i) =>
            (
                <>
                    <div className={`h-20 w-20 border border-solid border-borderGray rounded-full flex items-center justify-center ${activeStep >= i + 1 && 'bg-violet-700 text-white border-none'}`}>
                        {activeStep > i + 1 ? <MdDoneOutline fill='white'/> : i + 1}
                    </div>
                    {i < steps - 1 && <div key={i} className={`h-2 border-solid border-borderGray border-y w-24 z-[-1] ${activeStep >= i + 2 && 'bg-violet-500'}`} />}
                </>
            )
            )}
        </div>
    )
}

export default Stepper