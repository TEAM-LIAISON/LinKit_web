'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FloatingBtn() {
  return (
    <Link href={'https://tally.so/r/w7dOW6'} className="flex justify-center">
      <motion.nav
        className="w-[66%] lg:w-[46.9rem] h-[3.3rem] bg-gradient-floating flex justify-center items-center flex-shrink fixed bottom-4 left-8 lg:left-auto z-[100] rounded-[1.1875rem] border-[1.5px] border-[#7EA5F8]"
        whileHover={{ filter: 'brightness(1.05)' }}
      >
        <span className="font-bold  text-[#FCFCFD]">1분 만에 사전신청 하기</span>
      </motion.nav>
    </Link>
  )
}
