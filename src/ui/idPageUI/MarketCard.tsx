import React from "react";
import ContractDetails from "./ContractDetails";
import { ContractsQuotesResponse, Market } from "@/lib/definitions";

interface MarketCardProps {
  market: Market;
  data: ContractsQuotesResponse;
}

export default function MarketCard({ market, data }: MarketCardProps) {
  return (
    <div className="p-5 bg-grey-500">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span className="font-bold text-lg">{market.name}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
          <ContractDetails market_id={market.id} data={data} />
        </div>
      </details>
    </div>
  );
}
