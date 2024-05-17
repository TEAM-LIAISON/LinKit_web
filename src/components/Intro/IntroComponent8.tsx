import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent8() {
  return (
    <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
      className=" bg-white flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center"
=======
      className="bg-white flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center"
>>>>>>> 8144e1e (fix: 5차 QA 수정)
=======
      className=" bg-white flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center"
>>>>>>> e7e158f (fix: widthFix)
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.9,
        ease: 'easeOut',
      }}
    >
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="flex h-full w-full flex-col lg:w-[1200px] lg:flex-row">
        {/* left */}
        <div className="flex items-center justify-center lg:h-full lg:w-1/2 lg:justify-start">
          <div className="flex flex-col items-center lg:items-start lg:pb-20">
            <div className="w-[9rem] rounded-lg bg-grey20 p-1 text-center text-sm lg:w-[9.75rem] lg:p-[0.6rem] lg:text-base">
              3. 편리한 정보 확인
=======
      <div className="flex h-full w-full flex-col lg:flex-row">
=======
      <div className="flex h-full w-full flex-col lg:w-[1200px] lg:flex-row">
>>>>>>> e7e158f (fix: widthFix)
        {/* left */}
        <div className="flex items-center justify-center lg:h-full lg:w-1/2 lg:justify-start">
          <div className="flex flex-col items-center lg:items-start lg:pb-20">
            <div className="w-[9rem] rounded-lg bg-grey20 p-1 text-center text-sm lg:w-[9.75rem] lg:p-[0.6rem] lg:text-base">
<<<<<<< HEAD
              3 편리한 정보 확인
>>>>>>> 8144e1e (fix: 5차 QA 수정)
=======
              3. 편리한 정보 확인
>>>>>>> 8f79fee (fix: :lipstick: styleFIx)
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
<<<<<<< HEAD
          <Image src={'/assets/intro/section8bg.png'} fill objectFit="contain" alt="background" />
=======
          <Image src={'/assets/intro/section8bg.png'} layout="fill" objectFit="contain" alt="background" />
>>>>>>> 8144e1e (fix: 5차 QA 수정)
        </div>
      </div>
    </motion.div>
  )
}
