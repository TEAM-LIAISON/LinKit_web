import { Button } from '@/shared/ui/Button/Button'
import Image from 'next/image'

export default function OnBoardingComplete() {
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <div className="mt-[5.31rem] flex w-[35%] flex-col items-center">
          <Image src="/features/auth/sign_up_complete.svg" width={320} height={200} alt="complete" />

          <div className="mt-[1.75rem] flex flex-col items-center gap-3">
            <p className="text-xl font-semibold text-grey90">회원가입 완료!</p>
            <p className="text-sm text-grey50">나머지 정보를 입력해 프로필을 완성해 보세요</p>
          </div>

          <Button animationMode="main" className="mt-[5.13rem] w-[50%] rounded-lg bg-main text-lg text-white">
            프로필 작성하기
          </Button>
          <p className="mt-8 cursor-pointer font-normal text-grey60 underline">나중에 입력하기</p>
        </div>
      </div>
    </>
  )
}