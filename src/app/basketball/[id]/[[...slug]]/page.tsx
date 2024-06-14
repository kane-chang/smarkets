import { formatEventDate } from "@/lib/Formatter";
import { fetchEvent } from "@/lib/data";
import Breadcrumbs from "@/ui/Breadcrumbs";
import BoxingIdPage from "@/ui/boxing/boxingIdPage/BoxingIdPage";
import { IdPageSkeleton } from "@/ui/skeletons";

import { Suspense } from "react";
import { IoMdCalendar } from "react-icons/io";

export default async function Page({
  params,
}: {
  params: { id: string; slug?: string[] };
}) {
  const id = params.id;

  const eventData = await fetchEvent(id);

  if (!eventData) {
    return (
      <main className="p-5 flex flex-col w-full h-full">No Data Found</main>
    );
  }
  return (
    <main className="p-5 flex flex-col w-full h-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Basketball", href: "/basketball" },
          {
            label: eventData.events[0].name,
            href: params.slug
              ? `/basketball/${id}/${params.slug.join("/")}`
              : `/basketball/${id}`,
          },
        ]}
      />
      <div className="event-info border-b border-grey-400 ">
        <h1 className="text-4xl font-bold my-5">{eventData.events[0].name}</h1>
        <div className="flex items-center gap-1 font-semibold text-grey-300 text-xs my-3">
          <IoMdCalendar />
          <p>
            {eventData.events[0].start_datetime
              ? formatEventDate(eventData.events[0].start_datetime)
              : null}
          </p>
        </div>
      </div>
      <Suspense fallback={<IdPageSkeleton />}>
        <BoxingIdPage id={id}/>
      </Suspense>
    </main>
  );
}