import { fetchMarkets } from "@/lib/data";
import MarketCard from "@/ui/MarketCard";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const marketsData = await fetchMarkets(id)
  console.log(marketsData);

  if (!marketsData.markets) {
    notFound();
  } else {
    const markets_ids = marketsData.markets.map((market) => market.ids)
  }

  return (
    <main className="p-5">
      <div className="event-info border-b border-grey-400 ">
        <h1>Event Name</h1>
        <div className="flex gap-4 text-grey-300">
          <p>Date Time</p>
          <p>num markets available</p>
        </div>
      </div>
      <div className="markets-container">
        {marketsData.markets.map((market) => <MarketCard market={market}/>)}
      </div>
    </main>
  );
}
