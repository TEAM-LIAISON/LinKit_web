import Image from 'next/image'

export default function Landing4() {
  return (
    <div
      style={{ backgroundImage: 'url("/assets/onBoarding/1.0/Landing4_bg.png")' }}
      className="relative flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-center overflow-hidden overflow-x-auto bg-[#F0F2F6] bg-opacity-50 bg-cover bg-no-repeat pt-20"
    >
      <div className="flex w-full flex-col items-center">
        <p className="text-2xl font-bold">간결한 매칭 서비스</p>
        <h1 className="text-black text-center text-[2.625rem] font-bold">
          프로필만 등록하면
          <br />
          쏟아지는 추천 매칭
        </h1>
        <p className=" pt-4 text-lg text-grey60">가이드에 맞게 프로필을 등록하면 사용자들이 매칭을 요청해요</p>
      </div>

      <div>
        <Image
          src={'/assets/onBoarding/1.0/Landing4_requests.png'}
          width={730}
          height={682}
          alt="landing4"
          className="mt-[4.5rem]"
        />
      </div>
    </div>
  )
}