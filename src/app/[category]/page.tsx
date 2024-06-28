import { categories } from "@/lib/categories";
import { CategoryKeys } from "@/lib/definitions";
import Events from "@/ui/eventCardUI/Events";
import { EventsSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";

export default function Page({
  params,
}: {
  params: { category: CategoryKeys };
}) {
  const category = params.category;

  const types = categories[category].types;

  const name = categories[category].name;

  return (
    <div className="p-5 flex flex-col w-full">
      <h1 className="text-5xl font-bold my-5">{name}</h1>
      <Suspense fallback={<EventsSkeleton />}>
        <Events name={name} types={types} />
      </Suspense>
    </div>
  );
}
