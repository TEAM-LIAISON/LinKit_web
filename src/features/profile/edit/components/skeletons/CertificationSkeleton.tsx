export const CertificationSkeleton = () => {
  return (
    <div className="relative flex items-center justify-between gap-1 rounded-lg bg-white px-10 py-5">
      <div className="gap-2">
        <div className="h-5 w-32 animate-pulse rounded bg-grey20" />
        <div className="mt-2 flex gap-4">
          <div className="h-3 w-24 animate-pulse rounded bg-grey20" />
          <div className="h-3 w-20 animate-pulse rounded bg-grey20" />
        </div>
      </div>
      <div className="h-[22px] w-[22px] animate-pulse rounded bg-grey20" />
    </div>
  )
}