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
      className="bg-white flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.9,
        ease: 'easeOut',
      }}
    >
      <div className="flex w-full flex-col items-center">
        <span className="pt-3 text-[1.6rem] font-bold lg:text-[2.62rem] lg:leading-[3.625rem]">
          프로필만 등록하면
          <br />
          올해 여름을 알차게
        </span>
        <span className="pt-5 text-center text-sm font-medium text-grey70 lg:text-xl lg:leading-8">
          성공을 위해 제대로 일해보고 싶은 사람들과 함께해요
          <br />
          전국 대학(원)생 및 창업팀에게 열려있습니다.
        </span>
      </div>

      <div className="flex w-[min(100%,1920px)] flex-col gap-4 pt-28 lg:gap-7">
        {/* 첫번째 줄 */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d90821 (fix: FixBug)
        <div className="relative flex max-h-[110px] w-full overflow-hidden">
          <ul className="flex animate-infiniteScroll items-center">
            {doubledLogos.map((logo, index) => (
              <li key={index} className="mx-3 flex min-w-[130px] items-center justify-center md:min-w-[210px]">
<<<<<<< HEAD
=======
        <div className="flex max-h-[110px] w-full  overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="my-2 flex w-full animate-infiniteScroll items-center justify-center md:justify-start [&>img]:max-w-none [&>li]:mx-3">
            {logos.map((logo, index) => (
              <li key={index} className="flex min-w-[130px] items-center justify-center md:min-w-[210px]">
>>>>>>> 8144e1e (fix: 5차 QA 수정)
=======
>>>>>>> 8d90821 (fix: FixBug)
                <Image
                  src={logo}
                  alt={`Partner2-${index}`}
                  width={180}
                  height={70}
                  objectFit="cover"
                  className="rounded-[40px] shadow-logo-shadow "
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 두번째 줄 */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d90821 (fix: FixBug)
        <div className="relative flex max-h-[110px] w-full overflow-hidden pt-8">
          <ul className="animate-infiniteScrollReverse flex items-center">
            {doubledLogos2.map((logo, index) => (
              <li key={index} className="mx-3 flex min-w-[130px] items-center justify-center md:min-w-[210px]">
<<<<<<< HEAD
=======
        <div className="inline-flex max-h-[110px] w-full flex-nowrap overflow-hidden  [mask-image:linear-gradient(to_right,transparent_0%,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="my-2 flex w-full animate-infiniteScrollLeft items-center justify-center md:justify-start [&>img]:max-w-none [&>li]:mx-3">
            {logos2.map((logo, index) => (
              <li key={index} className=" flex min-w-[130px] items-center justify-center md:min-w-[210px]">
>>>>>>> 8144e1e (fix: 5차 QA 수정)
=======
>>>>>>> 8d90821 (fix: FixBug)
                <Image
                  src={logo}
                  alt={`Partner2-${index}`}
                  width={180}
                  height={70}
                  objectFit="cover"
                  className="rounded-[40px] shadow-logo-shadow"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
