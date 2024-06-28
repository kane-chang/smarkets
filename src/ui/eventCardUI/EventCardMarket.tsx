import { fetchContracts } from "@/lib/data";
import { MarketsResponse } from "@/lib/definitions";
import React from "react";
import EventCardContract from "./EventCardContract";

interface EventCardMarketProps {
  marketData: MarketsResponse;
}

export default async function EventCardMarket({
  marketData,
}: EventCardMarketProps) {
  
  if (!marketData.markets[0]) {
    return (
      <div className="event-contracts w-[28rem] flex gap-4">
        <p className="text-sm">No markets data available</p>
      </div>
    );
  }

  const ContractsData = await fetchContracts([marketData.markets[0].id]);
  if (!ContractsData) {
    return (
      <div className="event-contracts w-[28rem] flex gap-4">
        <p className="text-sm">No contracts data available</p>
      </div>
    );
  }

  return (
    <div className="event-contracts w-[29rem] flex gap-3">
      {ContractsData.contracts.length > 3
        ? [
            ContractsData.contracts
              .slice(0, 2)
              .map((contract) => (
                <EventCardContract key={contract.id} contract={contract} />
              )),
            <div key="contract-overflow" className="contract flex flex-col items-center justify-center w-36 min-w-0 max-w-36 text-sm">
              +{ContractsData.contracts.length - 2} contracts
            </div>,
          ]
        : ContractsData.contracts.map((contract) => (
            <EventCardContract key={contract.id} contract={contract} />
          ))}
    </div>
  );
}
