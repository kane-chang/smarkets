import React from 'react'
import MarketCard from './MarketCard';
import { fetchContractsQuotes, fetchEvent, fetchMarkets } from '@/lib/data';
import { IoMdCalendar } from 'react-icons/io';
import { formatEventDate } from '@/lib/Formatter';
import { Event } from '@/lib/definitions';

interface BoxingIdPageProps {
    id: Event['id']
}

export default async function BoxingIdPage({id}: BoxingIdPageProps) {
    const marketsData = await fetchMarkets([id]);
  
  if (!marketsData.markets) {
    return (
      <p>No Data Found</p>
    );
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
  )
}
