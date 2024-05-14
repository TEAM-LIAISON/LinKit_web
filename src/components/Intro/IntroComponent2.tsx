import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent2() {
  return (
    <>
      <div className="relative flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center overflow-hidden overflow-x-auto bg-[#F0F2F6] bg-white bg-opacity-50 bg-cover bg-no-repeat">
        <div className="flex h-[80%] w-full flex-col items-center bg-[#fff] md:pt-28 lg:justify-center lg:pt-32">
          <div className="flex h-full w-full flex-col items-center justify-center pt-20 md:flex-row lg:relative lg:w-[1200px] lg:items-start">
            <motion.div
              className="flex flex-col items-center md:w-1/2 xl:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.9,
                ease: 'easeOut',
              }}
            >
              <span className="text-center text-sm text-grey100 lg:mt-24 lg:pb-3 lg:text-right lg:text-xl">
                매번 팀원 구하다가 흐지부지
              </span>
              <span className="text-center text-[1.6rem] font-bold lg:text-left lg:text-[2.625rem] lg:leading-[3.4rem]">
                링킷으로 나를 PR하면
                <br />
                빠르게 팀을 꾸릴 수 있어요
              </span>
              <span className="pt-3 text-center text-sm font-medium text-grey70 md:leading-6 lg:pt-8 lg:text-left lg:text-[1.25rem] lg:leading-8">
                목표가 통하는 사람들과 자유롭게 소통하면서 <br />
                성공적인 팀빌딩으로 이어질 수 있습니다.{' '}
              </span>
            </motion.div>

            <motion.div
              className=" md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ scale: 1.02 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.9,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <Image
                src={'/assets/intro/section2Profile.png'}
                width={570}
                height={504}
                alt="이력서"
                className="w-[430px] md:h-auto md:w-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
