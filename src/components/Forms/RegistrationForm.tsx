'use client'

import React from 'react'
import Input from '@/components/Forms/Input/Input';
import { useInput } from '@/hooks/useInput';
import { useAppDispatch } from '@/hooks/useRedux';
import { setUser } from '@/store/actions/userReducer';
import { login } from '@/utils/api/userApi'
import { useRouter } from 'next/navigation';
import SubmitButton from './SubmitButton';



interface AuthProps {
    title: string,
    submitTitle: string,
    step: number,
    onStep: (value: number) => void;
}

const RegistrationForm: React.FC<AuthProps> = ({ title, submitTitle, step, onStep }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const username = useInput('')
    const email = useInput('')
    const password = useInput('')
    const [errorMessage, setErrorMessage] = React.useState('')


    const registerSubmit = async () => {
        // if (email.value !== '' && password.value !== '' && username.value !== '') {
        //     login(email.value, password.value)
        //         .then((data) => {
        //             dispatch(setUser(data.user))
        //             router.push('/home')
        //         })
        //         .catch(e => setErrorMessage(e.response.data.message))
        // } else {
        //     setErrorMessage('Email and Password are required!')
        // }
        onStep(step + 1)
    }

    return (
        <div className='flex flex-col items-start gap-4 border-b-[1px] border-solid border-b-[#D9DADC]'>
            <h1 className='mt-4 mb-2 m-auto p-1 font-bold text-3xl border-b-[1px] border-solid border-black'>{title}</h1>
            {step === 1 &&
                <>
                    <h3 className={`ml-4 font-bold mt-4 text-xs`}>Email</h3>
                    <Input placeholder='Enter Your Email' type='text' value={email.value} onChange={email.onChange} />
                </>
            }
            {step === 2 &&
                <>
                    <h3 className={`ml-4 font-bold mt-4 text-xs`}>Username</h3>
                    <Input placeholder='Enter Your Username' type='text' value={username.value} onChange={username.onChange} />
                </>
            }
            {step === 3 &&
                <>
                    <h3 className={`ml-4 font-bold text-xs`}>Password</h3>
                    <Input placeholder='Password' type='password' value={password.value} onChange={password.onChange} />
                </>
            }



            {errorMessage && <span className='self-end text-red-700 font-semibold text-lg'>{errorMessage}</span>}
            <SubmitButton onSubmit={registerSubmit} submitTitle={submitTitle} />
        </div>
    )
}

export default RegistrationForm;