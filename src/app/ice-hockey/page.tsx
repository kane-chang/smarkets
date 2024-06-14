import IceHockeyEvents from "@/ui/iceHockeyPageUI/IceHockeyEvents";
import { EventsSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="p-5 flex flex-col w-full">
      <h1 className="text-5xl font-bold my-5">Ice Hockey</h1>
      <Suspense fallback={<EventsSkeleton />}>
        <IceHockeyEvents />
      </Suspense>
    </div>
  );
}
