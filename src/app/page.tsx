import { redirect } from "next/navigation";

export default function Home() {
  redirect("/boxing");
  return (
    <div className="p-5 flex flex-col w-full">
      <h1 className="text-5xl font-bold my-5">Homepage</h1>
      <p>Unfortunately, this is not built yet!</p>
    </div>
  );
}
