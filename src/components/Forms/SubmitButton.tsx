import React from 'react'

interface SubmitButtonProps {
    onSubmit: () => void,
    submitTitle: string,
    around?: boolean
}

const SubmitButton: React.FC<SubmitButtonProps> = ({onSubmit, submitTitle, around}) => {
  return (
    <button onClick={onSubmit} className={`${!around && 'self-end'} bg-violet-700 h-12 w-28 rounded-3xl hover:scale-110 duration-150 ease-in-out text-white mb-4 active:scale-100`}>{submitTitle}</button>
  )
}

export default SubmitButton