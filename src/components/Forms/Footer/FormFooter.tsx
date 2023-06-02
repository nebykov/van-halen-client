import Link from 'next/link'
import styles from '../../../styles/forms.module.scss'
import React from 'react'

interface FormFooterProps {
    href: string,
    title: string,
    buttonTitle: string
}

const FormFooter: React.FC<FormFooterProps> = ({href, title, buttonTitle}) => {
    return (
        <Link href={href}>
        <div className={styles.formFooter}>
            <h3>{title}</h3>
            <button>
                {buttonTitle}
            </button>
        </div>
        </Link>
    )
}

export default FormFooter