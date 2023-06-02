'use client'

import FormFooter from '@/components/Forms/Footer/FormFooter';
import AuthForm from '@/components/Forms/Section/authForm';
import styles from '../../styles/forms.module.scss'



const Auth = () => (
    <>
        <img src='http://localhost:3000/van-halen.png' alt='Logo' height={44} width={450} className='mt-5' />
        <div className={styles.authForm}>
            <AuthForm />
        </div>
        <FormFooter href='/auth/registration' title='Don`t Have An Account?' buttonTitle='SIGN UP FOR VH WAVE' />
    </>
)

export default Auth;