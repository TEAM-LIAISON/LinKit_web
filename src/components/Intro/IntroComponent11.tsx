'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type OpenState = {
  [key: number]: boolean
}

export default function IntroComponent11() {
  const answers = [
    '사전 신청자에 한하여 다양한 얼리버드 혜택이 제공될 예정이며, 추첨을 통해 스타벅스 커피 쿠폰도 지급됩니다. ',
    '네, 신청해 주신 분 들 중 주니어 레벨인 사람들도 다수 있으며 학부 과정인 분들도 많습니다. ',
    '사전 신청이 마감된 후, 7월 초에 정식 서비스가 오픈될 예정이며 팀빌딩 서비스 이용이 가능합니다.',
    '사전 신청자에 한하여 진행 중인 프로젝트 및 팀원 모집 공고를 올려드릴 예정입니다.',
    '7월 초에 정식 서비스가 오픈될 예정이며, 사전 신청 시 기재해 주신 연락처로 오픈 알림을 보내드릴 예정입니다! ',
  ]
  const [isOpen, setIsOpen] = useState<OpenState>({})

  const toggleAccordion = (index: number) => {
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }
  return (
    <div
      id="FAQ"
      className="bg-white relative flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center lg:pt-20"
    >
      <div className="flex w-full flex-col items-center">
        <span className="text-center text-[1.6rem] font-bold leading-[3.625rem] lg:text-[2.62rem]">FAQ</span>
        <span className="pt-2 text-center text-xs font-medium text-grey70 lg:text-xl lg:leading-8">
          링킷에게 궁금한점이 있다면 우측 하단 채널톡으로 문의하세요!
        </span>
      </div>

      {/* Multiple FAQ entries */}
      <div className="mt-5 w-[90%] lg:mt-12 lg:w-auto">
        {[
          'Q. 사전신청을 하면 어떤 혜택이 있나요?',
          'Q. 경력이 없어도 팀빌딩이 가능한가요?',
          'Q. 사전신청은 완료했는데, 언제부터 팀빌딩 서비스 이용이 가능한가요?',
          'Q. 서비스 오픈 전에 미리 진행 중인 프로젝트를 다른 사람들에게 공유할 수 있나요?',
          'Q. 정식 서비스 오픈은 언제인가요?',
        ].map((question, index) => (
          <div key={index} className="mt-2 overflow-hidden rounded-xl shadow-faq-shadow">
            <motion.h2
              className="bg-white cursor-pointer p-5 text-sm font-bold lg:h-[4.18rem] lg:w-[46.9rem] lg:text-xl"
              onClick={() => toggleAccordion(index)}
              initial={false}
            >
              {question}
              <span className="float-right">{isOpen[index] ? '-' : '+'}</span>
            </motion.h2>
            <AnimatePresence>
              {isOpen[index] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pb-5 pl-5"
                >
                  <p className="p-1 text-xs lg:text-base">{answers[index]}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
