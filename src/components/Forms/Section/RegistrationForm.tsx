'use client'

import React from 'react'
import Input from '@/components/Forms/Input/Input';
import { useInput } from '@/hooks/useInput';
import { useAppDispatch } from '@/hooks/useRedux';
import { setUser } from '@/store/actions/userReducer';
import { useRouter } from 'next/navigation';
import SubmitButton from '../SubmitButton';
import { registration } from '@/utils/api/userApi';



interface AuthProps {
    submitTitle: string,
    step: number,
    onStep: (value: number) => void;
}

const RegistrationForm: React.FC<AuthProps> = ({ submitTitle, step, onStep }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const username = useInput('')
    const email = useInput('')
    const password = useInput('')
    const [errorMessage, setErrorMessage] = React.useState('')


    const registerSubmit = async () => {
        if (step < 3) {
            if (step === 1 && email.value !== '') {
                onStep(step + 1);
                setErrorMessage('');
              } else if (step === 1) {
                setErrorMessage('Email is necessary');
              } else if (step === 2 && username.value !== '') {
                onStep(step + 1);
                setErrorMessage('');
              } else if (step === 2) {
                setErrorMessage('Username is necessary');
              }
        } else {
            registration(email.value, username.value, password.value)
            .then(data => {
                dispatch(setUser(data.user))
                console.log(data.token)
            })
            .then(data => router.push('/home'))
            .catch(e => setErrorMessage(e.response.data.message))
        }

    }

    return (
        <>
            <h1>Registration</h1>
            {step === 1 &&
                <>
                    <h3>Email</h3>
                    <Input placeholder='Enter Your Email' type='text' value={email.value} onChange={email.onChange} />
                </>
            }
            {step === 2 &&
                <>
                    <h3>Username</h3>
                    <Input placeholder='Enter Your Username' type='text' value={username.value} onChange={username.onChange} />
                </>
            }
            {step === 3 &&
                <>
                    <h3>Password</h3>
                    <Input placeholder='Password' type='password' value={password.value} onChange={password.onChange} />
                </>
            }



            {errorMessage && <span className='self-end text-red-700 font-semibold text-lg'>{errorMessage}</span>}
            <SubmitButton onSubmit={registerSubmit} submitTitle={submitTitle} />
        </>
    )
}

export default RegistrationForm;