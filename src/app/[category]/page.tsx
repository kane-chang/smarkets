import BoxingEvents from "@/ui/boxingPageUI/BoxingEvents";
import Events from "@/ui/eventCardUI/Events";
import { EventsSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";

export default function Page({
    params,
  }: {
    params: { category: string};
  }) {
  return (
    <div className="p-5 flex flex-col w-full">
      <h1 className="text-5xl font-bold my-5">Boxing</h1>
      <Suspense fallback={<EventsSkeleton />}>
        <Events category={params.category}/>
      </Suspense>
    </div>
  );
}
