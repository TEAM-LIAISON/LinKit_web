import { CompletionResponse } from '@/lib/types'
import Image from 'next/image'

interface MyResumeCompletionProps {
  data: CompletionResponse
}

const items = [
  { key: 'introduction', label: '자기소개' },
  { key: 'profileSkill', label: '보유기술', required: true },
  { key: 'profileTeamBuildingField', label: '희망 팀빌딩 분야', required: true },
  { key: 'antecedents', label: '이력', required: true },
  { key: 'education', label: '학력', required: true },
  { key: 'awards', label: '수상' },
  { key: 'attach', label: '첨부' },
]

export default function MyResumeProgress({ data }: MyResumeCompletionProps) {
  return (
    <div className="w-full rounded-2xl bg-[#fff] px-[2.06rem] py-[1.38rem] shadow-resume-box-shadow">
      {/* title */}
      <div className="flex items-center gap-[0.56rem]">
        <span className="text-lg font-semibold text-grey100">프로필 완성도 : {data.completion}%</span>
        <span className="text-grey60">완성도를 높일 수록 매칭 확률이 높아져요! </span>
      </div>

      {/* progress */}
      <div className="flex flex-col">
        {/* 수치 */}
        <div className="relative flex w-full pt-6">
          <span className="absolute right-[50%]">50%</span>
          <span className="absolute right-[20%]">80%</span>
        </div>

        {/* 진행바 */}
        <div className="mt-8 w-full rounded-lg bg-grey20 py-1">
          <div className="rounded-lg bg-[#2563EB] py-1" style={{ width: `${data.completion}%` }}></div>
        </div>

        {/* 수치 설명 */}
        <div className="relative flex w-full pt-3">
          <div className="absolute right-[45%] flex flex-col items-center">
            <Image src="/assets/icons/reTriangle.svg" width={15} height={15} alt="re" />
            <span className="pt-1 text-grey100">프로필 열람 가능</span>
          </div>
          <div className="absolute right-[15%] flex flex-col items-center">
            <Image src="/assets/icons/reTriangle.svg" width={15} height={15} alt="re" />
            <span className="pt-1 text-grey100">매칭 요청 가능</span>
          </div>
        </div>

        {/* 항목들 */}
        <div className="flex w-full flex-col items-start pt-[3.81rem]">
          {items.map((item) => (
            <div key={item.key} className="flex gap-2 pt-2">
              <Image
                src={
                  data[item.key as keyof CompletionResponse] ? '/assets/icons/check.svg' : '/assets/icons/NotCheck.svg'
                }
                width={16}
                height={16}
                alt={data[item.key as keyof CompletionResponse] ? 'Check' : 'NotCheck'}
              />
              <span className="text-grey60">
                {item.label} {item.required && <span className="text-[#2563EB]">*</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}