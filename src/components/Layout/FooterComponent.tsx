import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function FooterComponent() {
  const router = useRouter()

  return (
    <footer className="w-full px-8 pb-20 pt-20 text-sm font-medium text-grey100 lg:px-44">
      <Link href={'/'}>
        <Image src={'/assets/intro/footerLogo.svg'} width={169} height={31} alt="logo" className="w-24 lg:w-auto" />
      </Link>
      <div className="flex flex-col gap-[0.59rem] pt-5">
        <span className="">liaison ㅣ 서울특별시 종로구 동숭길 127</span>
        <span className="text-grey100">대표 : 주서영 ㅣ 개인정보관리책임자 : 권동민</span>
        <div className="flex gap-x-6">
          <span
            onClick={() => {
              router.push('https://nn4e1.channel.io/home')
            }}
            className="cursor-pointer"
          >
            문의하기 (매일 09:00 ~ 18:00)
          </span>
          <Link href={'https://bit.ly/4biOQ1Z'}>
            <span>커뮤니티</span>
          </Link>
          <Link href={'/#FAQ'}>FAQ</Link>
        </div>
        <span className="">ⓒ 2024. liaison All rights reserved.</span>
        <div className="flex gap-x-4 pt-2">
          <Image
            onClick={() => {
              router.push('https://bit.ly/4bspBdG')
            }}
            src={'/assets/icons/instagram_dark.svg'}
            width={25}
            height={25}
            alt="instagram"
            className="cursor-pointer"
          />
          <Image
            onClick={() => {
              router.push('https://bit.ly/4biOQ1Z')
            }}
            src={'/assets/icons/kakao_dark.svg'}
            width={25}
            height={25}
            alt="kakaoTalk"
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  )
}
