'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function IntroComponent5() {
  const [logos, setLogos] = useState([
    '/assets/icons/universityIcon/1.png',
    '/assets/icons/universityIcon/2.png',
    '/assets/icons/universityIcon/3.png',
    '/assets/icons/universityIcon/4.png',
    '/assets/icons/universityIcon/5.png',
    '/assets/icons/universityIcon/6.png',
    '/assets/icons/universityIcon/7.png',
    '/assets/icons/universityIcon/8.png',
    '/assets/icons/universityIcon/9.png',
    '/assets/icons/universityIcon/10.png',
    '/assets/icons/universityIcon/11.png',
    '/assets/icons/universityIcon/12.png',
    '/assets/icons/universityIcon/13.png',
    '/assets/icons/universityIcon/14.png',
    '/assets/icons/universityIcon/15.png',
    '/assets/icons/universityIcon/16.png',
    '/assets/icons/universityIcon/17.png',
    '/assets/icons/universityIcon/18.png',
    '/assets/icons/universityIcon/19.png',
    '/assets/icons/universityIcon/20.png',
  ])
  const doubledLogos = [...logos, ...logos]

  const [logos2, setLogos2] = useState([
    '/assets/icons/universityIcon/21.png',
    '/assets/icons/universityIcon/22.png',
    '/assets/icons/universityIcon/23.png',
    '/assets/icons/universityIcon/24.png',
    '/assets/icons/universityIcon/25.png',
    '/assets/icons/universityIcon/26.png',
    '/assets/icons/universityIcon/27.png',
    '/assets/icons/universityIcon/28.png',
    '/assets/icons/universityIcon/29.png',
    '/assets/icons/universityIcon/30.png',
    '/assets/icons/universityIcon/31.png',
    '/assets/icons/universityIcon/32.png',
    '/assets/icons/universityIcon/33.png',
    '/assets/icons/universityIcon/34.png',
    '/assets/icons/universityIcon/35.png',
    '/assets/icons/universityIcon/36.png',
    '/assets/icons/universityIcon/37.png',
    '/assets/icons/universityIcon/38.png',
    '/assets/icons/universityIcon/39.png',
    '/assets/icons/universityIcon/40.png',
  ])
  const doubledLogos2 = [...logos2, ...logos2]

  return (
    <motion.div
      className="w-full snap-start snap-mandatory snap-always overflow-x-auto h-screen flex flex-col items-center justify-center min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.9,
        ease: 'easeOut',
      }}
    >
      <div className="w-full flex flex-col items-center">
        <span className="text-[1.6rem] lg:text-[2.62rem] font-bold pt-3 lg:leading-[3.625rem]">
          프로필만 등록하면
          <br />
          올해 여름을 알차게
        </span>
        <span className="text-sm lg:text-xl text-grey70 font-medium pt-5 text-center lg:leading-8">
          성공을 위해 제대로 일해보고 싶은 사람들과 함께해요
          <br />
          전국 대학(원)생 및 창업팀에게 열려있습니다.
        </span>
      </div>

      <div className="flex flex-col pt-28 gap-4 lg:gap-7 w-[min(100%,1920px)]">
        {/* 첫번째 줄 */}
        <div className="w-full max-h-[110px] flex  overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="w-full flex items-center justify-center md:justify-start [&>li]:mx-3 [&>img]:max-w-none animate-infiniteScroll">
            {logos.map((logo, index) => (
              <li key={index} className="min-w-[130px] md:min-w-[210px] flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner2-${index}`}
                  width={180}
                  height={70}
                  objectFit="cover"
                  className="shadow-logo-shadow rounded-[40px] "
                />
              </li>
            ))}
          </ul>
          {/* <ul className="w-full flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScroll">
          {doubledLogos.map((logo, index) => (
            <li key={index} className="min-w-[150px]">
              <Image src={logo} alt={`Partner2-${index}`} width={175} height={70} />
            </li>
          ))}
        </ul> */}
        </div>

        {/* 두번째 줄 */}
        <div className="w-full max-h-[110px] inline-flex flex-nowrap overflow-hidden  [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="w-full flex items-center justify-center md:justify-start [&>li]:mx-3 [&>img]:max-w-none animate-infiniteScrollLeft">
            {logos2.map((logo, index) => (
              <li key={index} className=" flex items-center justify-center min-w-[130px] md:min-w-[210px]">
                <Image
                  src={logo}
                  alt={`Partner2-${index}`}
                  width={180}
                  height={70}
                  objectFit="cover"
                  className="shadow-logo-shadow rounded-[40px]"
                />
              </li>
            ))}
          </ul>
          {/* <ul className="w-full flex items-center justify-center md:justify-start [&>li]:mx-8 [&>img]:max-w-none animate-infiniteScrollLeft">
          {doubledLogos2.map((logo, index) => (
            <li key={index} className="min-w-[170px]">
              <Image src={logo} alt={`Partner2-${index}`} width={145} height={38} />
            </li>
          ))}
        </ul> */}
        </div>
      </div>
    </motion.div>
  )
}
