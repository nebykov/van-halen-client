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
    registration?: boolean,
    onStep?: () => void
}

const AuthForm: React.FC<AuthProps> = ({ title, submitTitle }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const email = useInput('')
    const password = useInput('')
    const [errorMessage, setErrorMessage] = React.useState('')


    const loginSubmit = async () => {
        if (email.value !== '' && password.value !== '') {
            login(email.value, password.value)
                .then((data) => {
                    dispatch(setUser(data.user))
                    router.push('/home')
                })
                .catch(e => setErrorMessage(e.response.data.message))
        } else {
            setErrorMessage('Email and Password are required!')
        }
    }

    return (
        <div className='flex flex-col items-start gap-4 border-b-[1px] border-solid border-b-[#D9DADC]'>
            <h1 className='mt-4 mb-2 m-auto p-1 font-bold text-3xl border-b-[1px] border-solid border-black'>{title}</h1>
            <h3 className={`ml-4 font-bold mt-4 text-xs`}>Email address or username</h3>
            <Input placeholder='Enter Your Email' type='text' value={email.value} onChange={email.onChange} />
            <h3 className={`ml-4 font-bold text-xs`}>Email address or username</h3>
            <Input placeholder='Password' type='password' value={password.value} onChange={password.onChange} />
            {errorMessage && <span className='self-end text-red-700 font-semibold text-lg'>{errorMessage}</span>}
            <SubmitButton onSubmit={loginSubmit} submitTitle={submitTitle} />
        </div>
    )
}

export default AuthForm;