'use client'

import React from 'react'
import Input from '@/components/Forms/Input/Input';
import { useInput } from '@/hooks/useInput';
import { useAppDispatch } from '@/hooks/useRedux';
import { setUser } from '@/store/actions/userReducer';
import { login } from '@/utils/api/userApi'
import { useRouter } from 'next/navigation';
import SubmitButton from '../SubmitButton';


const AuthForm: React.FC = () => {
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
        <>
            <h1>Authorization</h1>
            <h3>Email address or username</h3>
            <Input placeholder='Enter Your Email' type='text' value={email.value} onChange={email.onChange} />
            <h3>Email address or username</h3>
            <Input placeholder='Password' type='password' value={password.value} onChange={password.onChange} />
            {
                errorMessage &&
                <span>
                    {errorMessage}
                </span>
            }
            <SubmitButton onSubmit={loginSubmit} submitTitle='Log In' />
        </>
    )
}

export default AuthForm;