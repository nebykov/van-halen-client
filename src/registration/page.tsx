'use client'

import AuthForm from '../components/Forms/authForm'
import { useRouter } from 'next/navigation';
import React from 'react';



const Registration = () => {
    const router = useRouter()
    
    return (
        <div>
            <div className={`flex items-center justify-center h-20 bg-white border-b-[1px] border-solid border-b-[#D9DADC]`}>
                <h1 className="font-bold text-2xl">Van Halen Wave</h1>
            </div>
            <div className='w-[450px] m-auto'>
            <AuthForm title='Registration' submitTitle='Sign Up'/>
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