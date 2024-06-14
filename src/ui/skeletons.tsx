const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden bg-grey-600 p-2 shadow-sm flex justify-between`}
    >
      <div className="flex p-1 items-center">
        <div className="flex flex-col gap-2">
          <div className="h-5 w-72 rounded-sm bg-grey-300" />
          <div className="h-3 w-24 rounded-sm bg-grey-400 text-sm font-medium" />
        </div>
      </div>
      <div className="flex gap-4 w-[28rem]">
        <div className="flex flex-col items-center gap-2">
          <div className="h-3 w-16 rounded-sm bg-grey-300" />
          <div className="flex gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="h-7 w-16 rounded-sm bg-green-accent" />
              <div className="h-2 w-10 rounded-sm bg-grey-400" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-7 w-16 rounded-sm bg-blue-accent" />
              <div className="h-2 w-10 rounded-sm bg-grey-400" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-3 w-16 rounded-sm bg-grey-300" />
          <div className="flex gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="h-7 w-16 rounded-sm bg-green-accent" />
              <div className="h-2 w-10 rounded-sm bg-grey-400" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-7 w-16 rounded-sm bg-blue-accent" />
              <div className="h-2 w-10 rounded-sm bg-grey-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EventsSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export function ContractCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden p-5 bg-grey-500 shadow-sm flex justify-between`}
    >
      <div className="flex p-1 items-center">
        <div className="h-5 w-72 rounded-sm bg-grey-300" />
      </div>
      <div className="flex items-center justify-center">
        <svg
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </div>
    </div>
  );
}

export function IdPageSkeleton() {
  return (
    <div className="gap-3 flex flex-col">
      <ContractCardSkeleton />
      <ContractCardSkeleton />
      <ContractCardSkeleton />
      <ContractCardSkeleton />
      <ContractCardSkeleton />
      <ContractCardSkeleton />
      <ContractCardSkeleton />
      <ContractCardSkeleton />
    </div>
  );
}
