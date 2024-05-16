import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent9() {
  return (
    <div className="bg-white flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center">
      <motion.div
        className="flex flex-col lg:h-full lg:w-[1300px] lg:flex-row"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        {/* left */}
        <div className="flex items-center justify-start lg:h-full lg:w-1/2">
          <div className=" flex flex-col items-center pb-4 lg:items-start lg:pb-20">
            <div className="w-[9rem] rounded-lg bg-grey20 p-1 text-center text-sm lg:w-[11.2rem] lg:p-[0.6rem] lg:text-base">
              4. 체계적인 매칭 시스템
            </div>
            <span className="pt-2 text-center text-[1.6rem] font-bold lg:text-left lg:text-[2.62rem] lg:leading-[3.625rem]">
              함께 팀을 이루고 싶은 사람에게
              <br />
              매칭 요청을 보내요
              <br />
            </span>
            <span className="pt-2 text-center text-xs font-medium leading-4 text-grey70 lg:pt-5 lg:text-xl">
              매칭 요청을 보낼 시 <br className="flex lg:hidden" />
              본인을 어필하는 메시지를 함께 전달할 수 있어요
            </span>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end gap-3 pt-2 lg:h-full lg:w-1/2">
          <div className="flex h-[18.5rem] w-[20.1rem] flex-col items-center rounded-2xl px-4 py-4 shadow-card-shadow lg:h-[29.5rem] lg:w-[32.6rem] lg:px-12 lg:py-7">
            <span className="text-xs lg:text-[1.1rem]">한가영님에게 매칭 요청하기</span>
            <div className="flex w-full items-center justify-center gap-5 lg:pt-5">
              <Image
                src={'/assets/intro/profile3.png'}
                width={110}
                height={110}
                alt="profile"
                className="h-[4.4rem] w-[4.4rem] lg:h-[6.875rem] lg:w-[6.875rem]"
              />
              <Image src={'/assets/icons/connect.svg'} width={69} height={11} alt="profile" className="" />
              <div className="flex h-[5.4rem] w-[5.4rem] items-center justify-center rounded-full border-2 border-[#2563EB] lg:h-[7.8rem] lg:w-[7.8rem]">
                <Image
                  src={'/assets/intro/profile5.png'}
                  width={110}
                  height={110}
                  alt="profile"
                  className="h-[4.4rem] w-[4.4rem] lg:h-[6.875rem] lg:w-[6.875rem]"
                />
              </div>
            </div>
            <span className="w-full pl-2 pt-3 text-xs text-grey50 lg:pt-6 lg:text-[0.93rem]">
              한가영님에게 매칭 요청을 보내기 위한 메시지를 적어주세요.
            </span>
            <div className="mt-1 h-[7.9rem] w-full rounded-lg bg-grey10 p-[0.81rem] text-[0.6rem] lg:text-[0.81rem]">
              안녕하세요, 프론트엔드 개발자 모집한다는 글 보고 연락드립니다. 저는 현재 대학생이지만, 2년 정도
              스타트업에서 일을 해 본 경력이 있으며, IoT 솔루션에 관심이 많습니다.
            </div>

            <div className="mt-3 flex h-[3.3rem] w-full items-center justify-center rounded-lg bg-grey90 text-xs font-bold text-[#fff] lg:text-sm ">
              매칭 요청 보내기
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
