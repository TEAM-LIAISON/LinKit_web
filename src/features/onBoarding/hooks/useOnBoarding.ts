// src/features/member/hooks/useOnBoarding.ts

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { submitMemberInfo } from '../api/memberApi'
import { usePhoneNumberFormatter } from '@/shared/hooks/usePhoneNumberFormatter'
import { useAuthStore } from '@/shared/store/useAuthStore'
import { validateName } from '@/shared/utils/validation'

export function useOnBoarding() {
  const [name, setName] = useState('')
  const { setEmailId } = useAuthStore()

  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  const [emailId, setLocalEmailId] = useState('')
  const [emailIdError, setEmailIdError] = useState('')
  const [nameError, setNameError] = useState('')

  const router = useRouter()
  const { phoneNumber, setPhoneNumber } = usePhoneNumberFormatter()

  // 영문 또는 영문+숫자 조합 검증 (영문으로 시작)
  const isValidEmailId = (id: string) => {
    const regex = /^[a-zA-Z][a-zA-Z0-9]*$/
    return regex.test(id)
  }

  const handleEmailIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setLocalEmailId(newValue)
    setEmailId(newValue)

    if (newValue.trim() === '') {
      setEmailIdError('')
    } else if (!isValidEmailId(newValue)) {
      setEmailIdError('영문으로 시작하고 영문+숫자 조합만 가능합니다')
    } else {
      setEmailIdError('')
    }
  }

  const isButtonEnabled =
    name.trim() !== '' && phoneNumber.replace(/\D/g, '').length >= 10 && emailId.trim() !== '' && !emailIdError // 에러가 없을 때만 버튼 활성화

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    const validation = validateName(newValue)
    setName(newValue)
    setNameError(validation.errorMessage)
  }

  const submitOnBoardingInfo = async () => {
    if (isButtonEnabled) {
      try {
        const accessToken = sessionStorage.getItem('accessToken') || ''
        const result = await submitMemberInfo(
          {
            memberName: name,
            contact: phoneNumber.replace(/\D/g, ''),
            emailId: emailId,
          },
          accessToken,
        )

        if (result) {
          router.push(`/login/onboarding-agree?name=${name}`)
        }
      } catch (error: any) {
        if (error.response?.status === 409) {
          setEmailIdError('이미 존재하는 아이디입니다')
        }
      }
    }
  }

  return {
    name,
    phoneNumber,
    email,
    emailId,
    emailIdError,
    setName: handleNameChange,
    setPhoneNumber,
    setEmailId: handleEmailIdChange,
    isButtonEnabled,
    submitOnBoardingInfo,
    nameError,
  }
}
