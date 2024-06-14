import { priceFormatter, quantityFormatter } from "@/lib/Formatter";
import React from "react";

export default function OffersContainer({ offers }) {

  return (
    <div className="offers flex gap-2">
      <div className="flex flex-col items-center">
        <button className="bg-grey-400 w-14 h-8 rounded-sm font-bold text-sm">
          {offers[2] ? priceFormatter(offers[0].price) : null}
        </button>
        <p className="text-grey-300 font-bold text-xs p-1">
          {offers[2]
            ? quantityFormatter(offers[0].quantity, offers[0].price)
            : null}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-grey-400 w-14 h-8 rounded-sm font-bold text-sm">
          {offers[1] ? priceFormatter(offers[0].price) : null}
        </button>
        <p className="text-grey-300 font-bold text-xs p-1">
          {offers[1]
            ? quantityFormatter(offers[0].quantity, offers[0].price)
            : null}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-green-accent w-14 h-8 rounded-sm font-bold text-sm">
          {offers[0] ? priceFormatter(offers[0].price) : null}
        </button>
        <p className="text-grey-300 font-bold text-xs p-1">
          {offers[0]
            ? quantityFormatter(offers[0].quantity, offers[0].price)
            : null}
        </p>
      </div>
    </div>
  );
}
