import IdEventInfo from "@/ui/idPageUI/IdEventInfo";
import IdPage from "@/ui/idPageUI/IdPage";
import { IdEventSkeleton, IdPageSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: { id: string; slug?: string[] };
}) {
  return (
    <main className="p-5 flex flex-col w-full h-full">
      <Suspense fallback={<IdEventSkeleton />}>
        <IdEventInfo id={params.id} slug={params.slug} />
      </Suspense>
      <Suspense fallback={<IdPageSkeleton />}>
        <IdPage id={params.id} />
      </Suspense>
    </main>
  );
}
