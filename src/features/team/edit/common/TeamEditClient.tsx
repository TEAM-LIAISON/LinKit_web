// ProfileEditClient.tsx (클라이언트 컴포넌트)
'use client'

import TeamEditLeftMenu from './TeamEditLeftMenu'

type TeamEditClientProps = {
  children: React.ReactNode
  params: { teamName: string }
}

export default function TeamEditClient({ children, params }: TeamEditClientProps) {
  // const [profileData, setProfileData] = useState<ResultType | null>(null)

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await fetchProfileData()
  //       setProfileData(data.result) // 데이터 구조에 맞춰 설정
  //     } catch (error) {
  //       console.error('Error fetching profile data:', error)
  //     }
  //   }
  //   getData()
  // }, [])

  // if (!profileData) return <div>Loading...</div>

  return (
    // <ProfileProvider profileData={profileData}>
    <div className="flex bg-white">
      <aside className=" fixed top-16 flex h-[calc(100vh-4rem)] w-[28%] flex-col items-end pr-[4.5rem] pt-[3.75rem]">
        <div
          className="rounded-xl border border-grey30 p-4"
          style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)' }}
        >
          <TeamEditLeftMenu params={params} />
        </div>
      </aside>

      <main className="ml-[28%] min-h-[calc(100vh-4rem)] w-3/4 bg-[#EDF3FF] pb-32 pl-[4.25rem] pr-[8.69rem] pt-[3.62rem]">
        {children}
      </main>
    </div>
    // </ProfileProvider>
  )
}
