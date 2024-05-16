import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent8() {
  return (
    <motion.div
      className="bg-white flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.9,
        ease: 'easeOut',
      }}
    >
      <div className="flex h-full w-full flex-col lg:flex-row">
        {/* left */}
        <div className="flex items-center justify-center lg:h-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pb-20">
            <div className="w-[9rem] rounded-lg bg-grey20 p-1 text-center text-sm lg:w-[9.75rem] lg:p-[0.6rem] lg:text-base">
              3. 편리한 정보 확인
            </div>
            <span className="pt-3 text-center text-[1.6rem] font-bold lg:text-left lg:text-[2.62rem] lg:leading-[3.625rem]">
              다른 사용자의 프로필을
              <br />
              자유롭게 열람해요
              <br />
            </span>
            <span className="pt-2 text-center text-xs font-medium leading-4 text-grey70 lg:text-xl">
              프로필을 열람하고 마음에 드는 <br className="flex sm:hidden" />
              사용자에게 매칭 요청을 보내보세요
            </span>
          </div>
        </div>
        {/* right */}
        <div className="relative flex h-full items-center gap-3 pt-2 lg:w-1/2">
          <Image src={'/assets/intro/section8bg.png'} layout="fill" objectFit="contain" alt="background" />
        </div>
      </div>
    </motion.div>
  )
}
