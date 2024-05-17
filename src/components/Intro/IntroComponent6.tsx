import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent6() {
  return (
<<<<<<< HEAD
    <div className="flex h-screen min-h-screen w-full snap-mandatory  snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-white bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center lg:pt-16">
=======
    <div className="bg-white flex h-screen min-h-screen w-full  snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center lg:pt-16">
>>>>>>> 8144e1e (fix: 5차 QA 수정)
      <motion.div
        className="flex flex-col lg:w-[1200px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <div className="hidden w-full justify-center gap-12 pb-5 lg:flex lg:pt-12">
          <span className="text-2xl text-[#C1C4C9]"># 공모전</span>
          <span className="text-2xl text-[#C1C4C9]"># 사이드 프로젝트</span>
        </div>

        <div className="flex h-full w-full flex-col lg:flex-row">
          {/* left */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e7e158f (fix: widthFix)
          <div className="flex h-full w-full items-center justify-center lg:w-1/2 lg:justify-start">
            <div className="flex flex-col items-center lg:items-start lg:pb-20">
              <div className="w-[9rem] rounded-lg bg-grey20 p-1 text-sm lg:w-[10.75rem] lg:p-[0.6rem] lg:text-base">
                1. 팀원 구인 경로 최소화
=======
          <div className="flex h-full items-center justify-center lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start lg:pb-20">
              <div className="w-[9rem] rounded-lg bg-grey20 p-1 text-sm lg:w-[10.75rem] lg:p-[0.6rem] lg:text-base">
<<<<<<< HEAD
                1 팀원 구인 경로 최소화
>>>>>>> 8144e1e (fix: 5차 QA 수정)
=======
                1. 팀원 구인 경로 최소화
>>>>>>> 8f79fee (fix: :lipstick: styleFIx)
              </div>
              <span className="pt-3 text-center text-[1.6rem] font-bold lg:text-left lg:text-[2.62rem] lg:leading-[3.625rem]">
                나와 맞는 사람을 <br />
                팀빌딩 해드립니다
                <br />
                <span className="pt-2 text-center text-xs font-medium leading-4 text-grey70 lg:text-xl">
                  조건을 설정하고 나와 같은 목적을 가진 사람을 만나보세요
                </span>
              </span>
            </div>
          </div>
          {/* right */}
          <div className="flex h-full items-center justify-center gap-3 pt-6 lg:w-1/2 lg:pt-2">
            {/* profile 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="mb-20 flex h-[18rem] w-[14rem] flex-col rounded-xl bg-[#fff] p-6 shadow-card-shadow lg:h-[24.8rem] lg:w-[17.5rem]"
            >
              <span className="text-base font-bold lg:text-[1.23rem] lg:leading-7">
                창업경진대회 기술 담당
                <br />
                팀원이 필요해요!
              </span>
              <span className="pt-2 text-[0.58rem] font-semibold text-grey60 lg:text-[0.69rem]">D-56</span>

              <div className="flex flex-col items-center pt-3 lg:gap-1">
                <Image
                  src={'/assets/intro/profile/seonjun.png'}
                  width={95}
                  height={95}
                  alt="profile"
                  className="h-[60px] w-[60px] rounded-3xl lg:h-[95px] lg:w-[95px] lg:rounded-[1.8rem]"
                />
                <span className="pt-3 text-[0.69rem] font-bold text-[#2563EB]">SeonJun</span>
                <span className="text-[0.55rem] font-semibold text-grey60 lg:text-[0.69rem]">
                  디자이너, 3D 모델링, 제품
                </span>
              </div>

              <div className="mt-2 flex h-[1.4rem] w-[100%] items-center justify-center bg-grey10 lg:mt-5 lg:h-[3.5rem] lg:w-full">
                <span className="p-2 text-[0.5rem] lg:text-xs lg:font-semibold">
                  {' '}
                  🔥 마음껏 소통을 통한 밀도있는 프로젝트
                </span>
              </div>

              <div className="flex w-full justify-between pt-2 text-[0.6rem] lg:pt-4 lg:text-xs">
                <div className="flex h-7 w-20 items-center  justify-center rounded-md bg-grey10 font-semibold text-grey90 lg:h-10 lg:w-28 ">
                  찜하기
                </div>
                <div className="flex h-7 w-20 items-center  justify-center rounded-md bg-grey100 font-semibold text-[#fff] lg:h-10 lg:w-28 ">
                  연락하기
                </div>
              </div>
            </motion.div>

            {/* profile 2*/}

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="mt-20 hidden h-[24.8rem] w-[17.5rem] flex-col rounded-xl bg-[#fff] p-6 shadow-card-shadow lg:flex"
            >
              <span className="text-[1.15rem] font-bold ">
                공공 데이터 공모전 나가실 분
                <br />
                있나요? 다른 공모전도 좋아요!
              </span>
              <span className="pt-2 text-[0.69rem] font-semibold text-grey60">D-23</span>

              <div className="flex flex-col items-center gap-1 pt-3">
                <Image
                  src={'/assets/intro/profile/minjung.png'}
                  width={95}
                  height={95}
                  alt="profile"
                  className="rounded-[1.8rem]"
                />
                <span className="pt-3 text-[0.69rem] font-bold text-[#2563EB]">김민정</span>
                <span className="text-[0.69rem] font-semibold text-grey60">기획, AI엔지니어, LLM</span>
              </div>

              <div className="mt-5 flex h-[3.5rem] w-full items-center justify-center bg-grey10">
                💬
                <span className="p-2 text-xs font-semibold">7월에 빠르게 디벨롭하고 싶어요</span>
              </div>

              <div className="flex w-full justify-between pt-4 text-xs">
                <div className="flex h-10 w-28 items-center justify-center rounded-md bg-grey10 font-semibold text-grey90 ">
                  찜하기
                </div>
                <div className="flex h-10 w-28 items-center justify-center rounded-md bg-grey100 font-semibold text-[#fff] ">
                  연락하기
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden w-full justify-end gap-12 pb-12 pr-60 pt-5 lg:flex">
          <span className="text-2xl text-[#C1C4C9] opacity-80"># 개발자 구인</span>
          <span className="text-2xl  text-[#C1C4C9] opacity-80"># 디자이너 구인</span>
        </div>
      </motion.div>
    </div>
  )
}
