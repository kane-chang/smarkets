import { priceFormatter, quantityFormatter } from "@/lib/Formatter";
import React from "react";

export default function BidsContainer({ bids }) {

  return (
    <div className="bids flex gap-2">
      <div className="flex flex-col items-center">
        <button className="bg-blue-accent w-14 h-8 rounded-sm font-bold text-sm">
          {bids[0] ? priceFormatter(bids[0].price) : null}
        </button>
        <p className="text-grey-300 font-bold text-xs p-1">
          {bids[0]
            ? quantityFormatter(bids[0].quantity, bids[0].price)
            : null}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-grey-400 w-14 h-8 rounded-sm font-bold text-sm">
          {bids[1] ? priceFormatter(bids[1].price) : null}
        </button>
        <p className="text-grey-300 font-bold text-xs p-1">
          {bids[1]
            ? quantityFormatter(bids[1].quantity, bids[1].price)
            : null}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-grey-400 w-14 h-8 rounded-sm font-bold text-sm">
          {bids[2] ? priceFormatter(bids[2].price) : null}
        </button>
        <p className="text-grey-300 font-bold text-xs p-1">
          {bids[2]
            ? quantityFormatter(bids[2].quantity, bids[2].price)
            : null}
        </p>
      </div>
    </div>
  );
}
