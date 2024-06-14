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
  const ContractsData = await fetchContracts([marketData.markets[0].id]);
  if (!ContractsData) {
    return (
      <div className="event-contracts w-[28rem] flex gap-4">
        <p>No contracts data available</p>
      </div>
    );
  }

  return (
    <div className="event-contracts w-[29rem] flex gap-3">
      {ContractsData.contracts.map((contract) => (
        <EventCardContract key={contract.id} contract={contract} />
      ))}
    </div>
  );
}
