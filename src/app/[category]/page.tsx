import { categories } from "@/lib/categories";
import BoxingEvents from "@/ui/boxingPageUI/BoxingEvents";
import Events from "@/ui/eventCardUI/Events";
import { EventsSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";

export default function Page({
    params,
  }: {
    params: { category: string};
  }) {

    const category = params.category
    console.log(category);
  
    const types = categories[category].types
    console.log(types);

    const name = categories[category].name
    console.log(name);

  return (
    <div className="p-5 flex flex-col w-full">
      <h1 className="text-5xl font-bold my-5">{name}</h1>
      <Suspense fallback={<EventsSkeleton />}>
        <Events name={name} types={types}/>
      </Suspense>
    </div>
  );
}
