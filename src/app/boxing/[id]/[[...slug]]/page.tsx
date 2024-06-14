import { fetchContractsQuotes, fetchMarkets } from "@/lib/data";
import MarketCard from "@/ui/MarketCard";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const marketsData = await fetchMarkets(id)
  // console.log(marketsData);

  if (!marketsData.markets) {
    notFound();
  } else {
    const markets_ids = marketsData.markets.map((market) => market.id)
    
    const contractsQuotesData = await fetchContractsQuotes(markets_ids)
    const marketCards = marketsData.markets.map((market) => <MarketCard key={market.id} market={market} data={contractsQuotesData}/>)
  return (
    <main className="p-5">
      <div className="event-info border-b border-grey-400 ">
        <h1>Event Name</h1>
        <div className="flex gap-4 text-grey-300">
          <p>Date Time</p>
          <p>num markets available</p>
        </div>
      </div>
      <div className="markets-container flex flex-col gap-3">
        {marketCards}
      </div>
    </main>
  );
  }

}
