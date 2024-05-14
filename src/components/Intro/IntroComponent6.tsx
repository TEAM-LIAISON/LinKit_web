import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent6() {
  return (
    <div className="w-full snap-start snap-mandatory snap-always overflow-x-auto  h-screen flex flex-col justify-center items-center pt-16 lg:pt-16 min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50 overflow-hidden">
      <motion.div
        className="lg:w-[1200px] flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <div className="hidden w-full lg:flex gap-12 justify-center lg:pt-12 pb-5">
          <span className="text-2xl text-[#C1C4C9]"># 공모전</span>
          <span className="text-2xl text-[#C1C4C9]"># 사이드 프로젝트</span>
        </div>

        <div className="w-full h-full flex flex-col lg:flex-row">
          {/* left */}
          <div className="lg:w-1/2 h-full flex items-center justify-center">
            <div className="flex flex-col items-center lg:items-start lg:pb-20">
              <div className="text-sm lg:text-base p-1 lg:p-[0.6rem] w-[9rem] lg:w-[10.75rem] bg-grey20 rounded-lg">
                1. 팀원 구인 경로 최소화
              </div>
              <span className="text-[1.6rem] lg:text-[2.62rem] font-bold pt-3 lg:leading-[3.625rem] text-center lg:text-left">
                나와 맞는 사람을 <br />
                팀빌딩 해드립니다
                <br />
                <span className="text-sm lg:text-xl text-grey70 font-medium pt-5 text-center leading-8">
                  조건을 설정하고 나와 같은 목적을 가진 사람을 만나보세요
                </span>
              </span>
            </div>
          </div>
          {/* right */}
          <div className="lg:w-1/2 h-full flex gap-3 pt-6 lg:pt-2 items-center justify-center">
            {/* profile 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="w-[14rem] lg:w-[17.5rem] h-[18rem] lg:h-[24.8rem] p-6 flex flex-col rounded-xl shadow-card-shadow bg-[#fff] mb-20"
            >
              <span className="text-base lg:text-[1.23rem] font-bold lg:leading-7">
                창업경진대회 기술 담당
                <br />
                팀원이 필요해요!
              </span>
              <span className="text-[0.58rem] lg:text-[0.69rem] font-semibold text-grey60 pt-2">D-56</span>

              <div className="flex flex-col items-center pt-3 lg:gap-1">
                <Image
                  src={'/assets/intro/profile/seonjun.png'}
                  width={95}
                  height={95}
                  alt="profile"
                  className="rounded-3xl lg:rounded-[1.8rem] w-[60px] h-[60px] lg:w-[95px] lg:h-[95px]"
                />
                <span className="text-[#2563EB] font-bold text-[0.69rem] pt-3">SeonJun</span>
                <span className="text-grey60 font-semibold text-[0.55rem] lg:text-[0.69rem]">
                  디자이너, 3D 모델링, 제품
                </span>
              </div>

              <div className="w-[100%] lg:w-full h-[1.4rem] lg:h-[3.5rem] bg-grey10 mt-2 lg:mt-5 flex items-center justify-center">
                <span className="lg:font-semibold p-2 text-[0.5rem] lg:text-xs">
                  {' '}
                  🔥 마음껏 소통을 통한 밀도있는 프로젝트
                </span>
              </div>

              <div className="flex w-full justify-between pt-2 lg:pt-4 text-[0.6rem] lg:text-xs">
                <div className="w-20 lg:w-28 h-7 lg:h-10  rounded-md bg-grey10 flex justify-center items-center text-grey90 font-semibold ">
                  찜하기
                </div>
                <div className="w-20 lg:w-28 h-7 lg:h-10  rounded-md bg-grey100 flex justify-center items-center text-[#fff] font-semibold ">
                  연락하기
                </div>
              </div>
            </motion.div>

            {/* profile 2*/}

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="hidden w-[17.5rem] h-[24.8rem] p-6 lg:flex flex-col rounded-xl shadow-card-shadow bg-[#fff] mt-20"
            >
              <span className="text-[1.15rem] font-bold ">
                공공 데이터 공모전 나가실 분
                <br />
                있나요? 다른 공모전도 좋아요!
              </span>
              <span className="text-[0.69rem] font-semibold text-grey60 pt-2">D-23</span>

              <div className="flex flex-col items-center pt-3 gap-1">
                <Image
                  src={'/assets/intro/profile/minjung.png'}
                  width={95}
                  height={95}
                  alt="profile"
                  className="rounded-[1.8rem]"
                />
                <span className="text-[#2563EB] font-bold text-[0.69rem] pt-3">김민정</span>
                <span className="text-grey60 font-semibold text-[0.69rem]">기획, AI엔지니어, LLM</span>
              </div>

              <div className="w-full h-[3.5rem] bg-grey10 mt-5 flex items-center justify-center">
                💬
                <span className="font-semibold p-2 text-xs">7월에 빠르게 디벨롭하고 싶어요</span>
              </div>

              <div className="flex w-full justify-between pt-4 text-xs">
                <div className="w-28 h-10 rounded-md bg-grey10 flex justify-center items-center text-grey90 font-semibold ">
                  찜하기
                </div>
                <div className="w-28 h-10 rounded-md bg-grey100 flex justify-center items-center text-[#fff] font-semibold ">
                  연락하기
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden w-full lg:flex gap-12 justify-end pb-12 pt-5 pr-60">
          <span className="text-2xl text-[#C1C4C9] opacity-80"># 개발자 구인</span>
          <span className="text-2xl  text-[#C1C4C9] opacity-80"># 디자이너 구인</span>
        </div>
      </motion.div>
    </div>
  )
}
