// src/shared/ui/Input/Input.tsx
'use client'

import { ChangeEvent, HTMLInputTypeAttribute } from 'react'

interface InputProps {
  type?: HTMLInputTypeAttribute
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange, placeholder = '', className = '' }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`focus:border[1.5px] rounded-xl border border-grey30 px-6 py-3 focus:border-[1.5px] focus:border-main focus:outline-none ${className}`}
    />
  )
}

export default Input