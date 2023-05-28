import React from 'react'

interface UploadFileProps {
    children: React.ReactNode,
    setFile: Function,
    accept: string
}

const UploadFile: React.FC<UploadFileProps> = ({ children, setFile, accept }) => {
    const ref = React.useRef<HTMLInputElement>(null)

    const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target?.files[0])
            console.log(e.target?.files[0])
        }
    }
    return (
        <div onClick={() => ref.current?.click()}>
            <input
                ref={ref}
                type='file'
                className='hidden'
                accept={accept}
                onChange={(e) => fileUpload(e)}
            />
            <>
                {children}
            </>
        </div>
    )
}

export default UploadFile