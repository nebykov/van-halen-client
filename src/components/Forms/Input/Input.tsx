'use client'

import React from 'react'


interface InputProps {
   placeholder: string,
   type: string,
   value: string,
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({placeholder, type, value, onChange}) => {
  return (
    <input 
    className='w-[450px] placeholder:text-[13px]  h-8 p-5 border-[1px] border-solid border-[#D9DADC] outline-none rounded-[4px]' 
    placeholder={placeholder} 
    type={type} 
    value={value}
    onChange={(e) => onChange(e)}
    />
  )
}

export default Input