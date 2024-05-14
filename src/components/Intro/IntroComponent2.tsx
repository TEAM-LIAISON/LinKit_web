import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent2() {
  return (
    <>
      <div className="w-full bg-[#F0F2F6] relative snap-start snap-mandatory snap-always overflow-x-auto h-screen flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50 overflow-hidden">
        <div className="w-full h-[80%] pt-20 lg:pt-28 flex flex-col lg:justify-center items-center lg:pl-[11rem]  bg-[#fff]">
          <div className="w-full lg:w-[1200px] flex flex-col md:flex-row items-center lg:items-start lg:relative">
            <motion.div
              className="md:w-1/2 flex flex-col items-center xl:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.9,
                ease: 'easeOut',
              }}
            >
              <span className="text-center lg:text-right text-sm lg:text-xl text-grey100 lg:mt-24 lg:pb-3">
                매번 팀원 구하다가 흐지부지
              </span>
              <span className="text-[1.6rem] lg:text-[2.625rem] font-bold text-center lg:text-left lg:leading-[3.4rem]">
                링킷으로 나를 PR하면
                <br />
                빠르게 팀을 꾸릴 수 있어요
              </span>
              <span className="text-sm lg:text-[1.25rem] font-medium text-grey70 pt-3 lg:pt-8 md:leading-6 lg:leading-8 text-center lg:text-left">
                목표가 통하는 사람들과 자유롭게 소통하면서 <br />
                성공적인 팀빌딩으로 이어질 수 있습니다.{' '}
              </span>
            </motion.div>

            <motion.div
              className="md:w-1/2 "
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
                className="w-[430px] md:w-auto md:h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
