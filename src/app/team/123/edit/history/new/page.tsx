import TeamEditHistoryNew from '@/features/team/edit/history/\bTeamEditHistoryNew'
import Image from 'next/image'
import Link from 'next/link'

export default function TeamEditHistoryNewPage() {
  return (
    <div className="flex flex-col gap-5">
      <Link href="/team/123/edit/products" className="flex gap-2">
        <Image src="/common/icons/arrow-left.svg" width={24} height={24} alt="back" />
        <label className="text-xl font-bold">연혁</label>
      </Link>

      <TeamEditHistoryNew />
    </div>
  )
}