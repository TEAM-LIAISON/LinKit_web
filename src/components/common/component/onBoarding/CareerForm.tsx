// CareerForm.tsx
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { OnBoardingCareerFormInputs } from '@/lib/types'
import Image from 'next/image'
import Input from '../Basic/Input'
import Select from '../Basic/Select'
import { Button } from '../../Button'

interface CareerFormProps {
  defaultValues: OnBoardingCareerFormInputs
  onSubmit: SubmitHandler<OnBoardingCareerFormInputs>
  onCancel: () => void
  isEditingMode: boolean
}

export const CareerForm: React.FC<CareerFormProps> = ({ defaultValues, onSubmit, onCancel, isEditingMode }) => {
  const { register, handleSubmit, setValue, watch } = useForm<OnBoardingCareerFormInputs>({
    defaultValues,
  })

  const retirement = watch('retirement')

  const retirementOptions = [
    { value: 'true', label: '종료' },
    { value: 'false', label: '진행중' },
  ]

  // Update value manually since react-hook-form does not auto bind to custom components
  const handleRetirementChange = (value: string) => {
    setValue('retirement', value === 'true')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex w-full flex-col rounded-[0.63rem] border border-grey30 px-5 py-6 md:w-[55%]"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex w-full flex-col sm:w-1/2">
          <span className="text-sm font-normal text-grey100">
            회사명<span className="pl-1 text-[#2563EB]">*</span>
          </span>
          <input
            type="text"
            placeholder="회사명 / 프로젝트"
            className="mt-2 rounded-[0.31rem] border border-grey40 px-[0.88rem] py-2 text-sm"
            {...register('projectName', { required: true })}
          />
        </div>

        <div className="flex w-full flex-col sm:w-1/2">
          <span className="text-sm font-normal text-grey100">
            포지션<span className="pl-1 text-[#2563EB]">*</span>
          </span>
          <input
            type="text"
            placeholder="Product Manager"
            className="mt-2 rounded-[0.31rem] border border-grey40 px-[0.88rem] py-2 text-sm"
            {...register('projectRole', { required: true })}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <span className="text-sm font-normal text-grey100">
          기간<span className="pl-1 text-[#2563EB]">*</span>
        </span>
        <div className="flex w-full flex-col justify-between sm:flex-row">
          <div className="mt-2 flex flex-row gap-2">
            <Input className="w-24" placeholder="YYYY.MM" {...register('startDate', { required: true })} />
            <Image src="/assets/icons/~.svg" width={8} height={29} alt="~" />
            <Input
              placeholder="YYYY.MM"
              className="w-24"
              {...register('endDate', { required: retirement !== 'false' })}
              disabled={retirement === 'false'}
            />

            <Select
              name="retirement"
              options={retirementOptions}
              selectedValue={String(retirement)} // Convert the value to string
              onChange={(e) => handleRetirementChange(e.target.value)} // Update the form state on change
            />
          </div>

          <div className="mt-8 flex w-full items-end justify-end gap-2 sm:mt-3 sm:w-auto">
            {isEditingMode && (
              <Button type="button" mode="sub" animationMode="sub" onClick={onCancel} className="w-full">
                취소
              </Button>
            )}
            <Button type="submit" mode="main" animationMode="main" className="w-full">
              {isEditingMode ? '수정' : '추가'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default CareerForm