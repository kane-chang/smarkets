import { fetchContracts, fetchQuotes } from "@/lib/data";
import { notFound } from "next/navigation";
import React from "react";
import OffersContainer from "./OffersContainer";
import BidsContainer from "./BidsContainer";

export default async function ContractDetails({ market_id, data }) {
  //   const contractsData = await fetchContracts(market_id);
  //   const quotesData = await fetchQuotes(market_id);
  //   console.log(contractsData);
  //   console.log(quotesData);

  if (!data) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const contracts = data[0].contracts.filter(
    (contract) => contract.market_id === market_id
  );
  //   console.log(contracts);
    const contractRows = contracts.map((contract) => <div className="contractRow flex justify-between text-white items-center border-t border-grey-400 py-2">
    <h2>{contract.name}</h2>
    <div className="prices-container flex gap-2">
      <OffersContainer offers={data[1][contract.id]['offers']}/>
      <BidsContainer bids={data[1][contract.id]['bids']}/>
    </div>
  </div>)

  return (
    <div className="">
      {contractRows}
    </div>
  );
}

// {data[1][contracts[0].id]['bids'][0].price}
