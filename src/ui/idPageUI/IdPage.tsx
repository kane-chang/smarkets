import React from "react";
import MarketCard from "./MarketCard";
import { fetchContractsQuotes, fetchMarkets } from "@/lib/data";
import { Event } from "@/lib/definitions";

interface IdPageProps {
  id: Event["id"];
}

export default async function IdPage({ id }: IdPageProps) {
  const marketsData = await fetchMarkets([id]);

  if (!marketsData.markets) {
    return <p>No Market Data Found</p>;
  }

  const markets_ids = marketsData.markets.map((market) => market.id);

  const contractsQuotesData = await fetchContractsQuotes(markets_ids);

  const marketCards = marketsData.markets.map((market) => (
    <MarketCard key={market.id} market={market} data={contractsQuotesData} />
  ));

  return (
    <>
      <div className="markets-container flex flex-col gap-3">{marketCards}</div>
    </>
  );
}
