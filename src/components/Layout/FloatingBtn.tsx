'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FloatingBtn() {
  return (
    <Link href={'https://tally.so/r/w7dOW6'} className="flex justify-center">
      <motion.nav
        className="fixed bottom-4 z-[100] flex h-[3.3rem] w-[90%] flex-shrink items-center justify-center rounded-[1.1875rem] border-[1.5px] border-[#7EA5F8] bg-gradient-floating lg:left-auto lg:w-[46.9rem]"
        whileHover={{ filter: 'brightness(1.05)' }}
      >
        <span className="font-bold  text-[#FCFCFD]">1분 만에 사전신청 하기</span>
      </motion.nav>
    </Link>
  )
}
