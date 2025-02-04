import TeamEditProduct from '@/features/team/edit/product/TeamEditProduct'
import { Button } from '@/shared/ui/Button/Button'
import Link from 'next/link'

export default function TeamEditProductsPage({ params }: { params: { teamName: string } }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">프로덕트</h1>

      <Link href={`/team/${params.teamName}/edit/products/new`}>
        <Button mode="main2" animationMode="main" className="mt-5 w-full rounded-[0.69rem] py-2">
          + 추가하기
        </Button>
      </Link>

      <TeamEditProduct teamName={params.teamName} />
    </div>
  )
}
