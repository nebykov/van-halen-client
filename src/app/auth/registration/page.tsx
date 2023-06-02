'use client'

import FormFooter from '@/components/Forms/Footer/FormFooter';
import RegistrationForm from '@/components/Forms/Section/RegistrationForm';
import styles from '../../../styles/forms.module.scss'
import React from 'react';
import Stepper from '@/components/UI/Stepper';



const Registration = () => {
    const [currentStep, setCurrentStep] = React.useState(1)


    return (
        <>
            <Stepper steps={3} activeStep={currentStep}/>
            <div className={styles.authForm}>
            <RegistrationForm submitTitle='Next' step={currentStep} onStep={(value) => setCurrentStep(value)}/>
            </div>
            <FormFooter href='/auth' title='Already have an account?' buttonTitle='LOG IN FOR VH WAVE'/>
           
        </>
    )
}

export default Registration;