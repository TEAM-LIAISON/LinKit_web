'use client'

import Link from 'next/link'
import { set, useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '@/context/recoil-context'
import { PostRoleData } from '@/lib/action'
import { useRouter } from 'next/navigation'

const Positions = ['기획자', 'SW 개발자', '디자이너', '리서처', '마케터', '데이터 분석', '기타']
const Skills = ['Java', 'React', '기획자 기술3', '기획자 기술4', '기획자 기술5', '디자이너 기술1', '디자이너 기술2']

interface FormValues {
  roleFields: string[]
  skillNames: string[]
}

export default function Role() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const [roleFields, setSelectedRoleFields] = useState<string[]>([])
  const [skillNames, setSelectedSkillFields] = useState<string[]>([])
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const router = useRouter()

  // 포지션 토글
  const toggleRoleSelection = (field: string) => {
    setSelectedRoleFields((prevSelected) =>
      prevSelected.includes(field) ? prevSelected.filter((item) => item !== field) : [...prevSelected, field],
    )
  }

  // 기술 토글
  const toggleSkillSelection = (field: string) => {
    setSelectedSkillFields((prevSelected) =>
      prevSelected.includes(field) ? prevSelected.filter((item) => item !== field) : [...prevSelected, field],
    )
  }

  const onSubmit = async (data: FormValues) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      const response = await PostRoleData(accessToken, roleFields, skillNames)
      if (response.ok) {
        router.push('/onBoarding/person/school')
      }
    }
  }

  return (
    <div className="flex h-screen flex-col lg:pt-[69px]">
      <div className="fixed mt-[53px] h-[0.18rem] w-2/3 bg-[#2563EB] lg:mt-0"></div>
      <div className="flex flex-grow flex-col items-center py-16">
        <div className="flex w-[90%] justify-between text-sm font-medium leading-9 text-grey60 sm:w-[55%]">
          <span>내 이력서 가이드</span>
        </div>
        <div className="flex w-[90%] flex-col items-start leading-9 sm:w-[55%]">
          <span className="text-2xl font-bold">희망하는 역할을 알려주세요</span>
          <span className="text-grey60">*중복선택 가능</span>
        </div>

        {/* 포지션 */}
        <div className="flex w-[90%] flex-col sm:w-[55%]">
          <div className="flex flex-wrap gap-2 pt-5">
            {Positions.map((el, index) => (
              <button
                key={index}
                className={`w-[30%] rounded-md border px-3 py-1 ${roleFields.includes(el) ? 'border-[#2563EB] bg-[#D3E1FE66] text-[#2563EB]' : 'border-[#CBD4E1] text-[#64748B]'}`}
                onClick={() => toggleRoleSelection(el)}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
        {/* 보유한 기술 */}
        <div className="flex w-[90%] flex-col pt-8 sm:w-[55%] lg:pt-16">
          <span className="text-lg font-bold leading-5">
            보유한 기술을 알려주세요 <span className="text-sm font-normal text-grey80">*중복선택가능</span>
          </span>
          <div className="flex flex-wrap gap-x-2 pt-5">
            {Skills.map((el, index) => (
              <button
                key={index}
                className={`mt-2 rounded-md border px-3 py-1 ${skillNames.includes(el) ? 'border-[#2563EB] bg-[#D3E1FE66] text-[#2563EB]' : 'border-[#CBD4E1] text-[#64748B]'}`}
                onClick={() => toggleSkillSelection(el)}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
        {/* Footer */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white fixed bottom-0 left-0 w-full shadow-soft-shadow">
          <div className="flex justify-center p-4 lg:justify-end lg:pr-96">
            <Link href="/onBoarding/person/location">
              <button className="bg-blue-100 text-blue-700 mr-4 rounded bg-grey20 px-12 py-2 lg:px-16">이전</button>
            </Link>

            <button
              className={`${roleFields.length > 0 && skillNames.length > 0 ? 'bg-[#2563EB]' : 'bg-[#7EA5F8]'} mr-4 rounded  px-16 py-2 text-[#fff]`}
              disabled={!(roleFields.length > 0 && skillNames.length > 0)}
            >
              다음
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}