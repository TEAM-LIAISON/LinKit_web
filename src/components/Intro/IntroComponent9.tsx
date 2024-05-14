import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent9() {
  return (
    <div className="w-full snap-start snap-mandatory snap-always overflow-x-auto h-screen flex flex-col items-center pt-20 min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50 overflow-hidden">
      <motion.div
        className="lg:w-[1300px] lg:h-full flex lg:flex-row flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        {/* left */}
        <div className="lg:w-1/2 lg:h-full flex items-center justify-start">
          <div className=" flex flex-col lg:items-start items-center pb-4 lg:pb-20">
            <div className="text-sm lg:text-base text-center p-1 lg:p-[0.6rem] w-[9rem] lg:w-[11.2rem] bg-grey20 rounded-lg">
              4. 체계적인 매칭 시스템
            </div>
            <span className="text-[1.6rem] lg:text-[2.62rem] font-bold pt-3 lg:leading-[3.625rem] text-center lg:text-left">
              함께 팀을 이루고 싶은 사람에게
              <br />
              매칭 요청을 보내요
              <br />
            </span>
            <span className="text-xs lg:text-xl text-grey70 font-medium pt-2 lg:pt-5 text-center leading-5">
              매칭 요청을 보낼 시 <br className="lg:hidden flex" />
              본인을 어필하는 메시지를 함께 전달할 수 있어요
            </span>
          </div>
        </div>
        {/* right */}
        <div className="lg:w-1/2 lg:h-full flex gap-3 pt-2 items-center justify-end">
          <div className="w-[20.1rem] lg:w-[32.6rem] h-[18.5rem] lg:h-[29.5rem] shadow-card-shadow rounded-2xl flex flex-col px-4 py-4 lg:py-7 lg:px-12 items-center">
            <span className="text-xs lg:text-[1.1rem]">한가영님에게 매칭 요청하기</span>
            <div className="flex w-full gap-5 justify-center items-center lg:pt-5">
              <Image
                src={'/assets/intro/profile3.png'}
                width={110}
                height={110}
                alt="profile"
                className="w-[4.4rem] h-[4.4rem] lg:w-[6.875rem] lg:h-[6.875rem]"
              />
              <Image src={'/assets/icons/connect.svg'} width={69} height={11} alt="profile" className="" />
              <div className="w-[5.4rem] h-[5.4rem] lg:w-[7.8rem] lg:h-[7.8rem] rounded-full border-2 border-[#2563EB] flex justify-center items-center">
                <Image
                  src={'/assets/intro/profile5.png'}
                  width={110}
                  height={110}
                  alt="profile"
                  className="w-[4.4rem] h-[4.4rem] lg:w-[6.875rem] lg:h-[6.875rem]"
                />
              </div>
            </div>
            <span className="w-full text-xs lg:text-[0.93rem] text-grey50 pt-3 lg:pt-6 pl-2">
              한가영님에게 매칭 요청을 보내기 위한 메시지를 적어주세요.
            </span>
            <div className="w-full h-[7.9rem] p-[0.81rem] bg-grey10 rounded-lg mt-1 text-[0.6rem] lg:text-[0.81rem]">
              안녕하세요, 프론트엔드 개발자 모집한다는 글 보고 연락드립니다. 저는 현재 대학생이지만, 2년 정도
              스타트업에서 일을 해 본 경력이 있으며, IoT 솔루션에 관심이 많습니다.
            </div>

            <div className="text-xs lg:text-sm w-full h-[3.3rem] bg-grey90 rounded-lg mt-3 flex items-center justify-center text-[#fff] font-bold ">
              매칭 요청 보내기
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
