import Image from 'next/image'
import { motion } from 'framer-motion'
import { reviews, reviews2 } from '@/lib/data'

export default function IntroComponent10() {
  const loopAnimation = {
    animate: {
      x: ['0%', '-200%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 60,
          ease: 'linear',
        },
      },
    },
  }

  const loopAnimation2 = {
    animate: {
      x: ['-200%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 60,
          ease: 'linear',
        },
      },
    },
  }

  const burstAnimation = {
    initial: {
      scale: 0.9,
      opacity: 0.6,
    },
    animate: {
      scale: 1.8,
      opacity: [0.3, 1, 0.6],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        loop: Infinity,
      },
    },
  }

  return (
    <motion.div
      className="relative w-full snap-start snap-mandatory snap-always overflow-hidden h-screen flex flex-col items-center pt-20 lg:pt-32 min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.9,
        ease: 'easeOut',
      }}
    >
      <motion.div variants={burstAnimation} initial="initial" whileInView="animate" className="absolute inset-0 z-0">
        <Image src={'/assets/intro/section10bg.png'} alt="line" layout="fill" objectFit="cover" />
      </motion.div>

      <Image
        src={'/assets/intro/linkitRec.png'}
        width={921}
        height={921}
        alt="linkit"
        className="absolute bottom-0 left-20 right-0 mx-auto hidden lg:flex z-0"
      />

      <div className="w-full flex flex-col items-center z-10">
        <span className="text-[1.6rem] lg:text-[2.62rem] font-bold pt-3 lg:leading-[3.625rem] text-center">
          링킷이
          <br />
          다시 돌아왔습니다
        </span>
        <span className="text-xs lg:text-xl text-grey70 font-medium pt-3 lg:pt-5 text-center leading-8">
          베타서비스 이후 더욱 발전된 링킷의 팀빌딩 서비스를 만나보세요!
        </span>
      </div>

      {/* 첫번째 줄 */}
      <div className="relative w-full overflow-hidden py-8 z-10 [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]"></div>
        <motion.div className="flex gap-5" {...loopAnimation}>
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={index}
              className="flex flex-col min-w-min w-auto justify-center bg-white-alpha-50 rounded-lg px-3 py-2 lg:px-5 lg:py-4 shadow-logo-shadow whitespace-nowrap"
            >
              <span className="text-xs lg:text-lg">{review.message}</span>
              <span className="w-full text-right pt-1 lg:pt-2 text-xs lg:text-sm">{review.author}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 두번째 줄 */}
      <div className="relative w-full  overflow-hidden py-8 z-10 [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <div className="absolute  [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]"></div>
        <motion.div className="flex gap-5" {...loopAnimation2}>
          {reviews2.concat(reviews).map((review, index) => (
            <div
              key={index}
              className="flex flex-col min-w-min w-auto justify-center bg-[#fff] rounded-lg px-3 py-2 lg:px-5 lg:py-4 shadow-logo-shadow whitespace-nowrap"
            >
              <span className="text-xs lg:text-lg">{review.message}</span>
              <span className="w-full text-right pt-1 lg:pt-2 text-xs lg:text-sm">{review.author}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
