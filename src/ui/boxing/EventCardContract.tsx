import { priceFormatter, quantityFormatter } from "@/lib/Formatter";
import { Contract } from "@/lib/definitions";
import React from "react";

interface EventCardContractProps {
    contract: Contract
}

export default function EventCardContract({ contract }: EventCardContractProps)  {
  const mockOffersData =  [
      {
        price: 7407,
        quantity: 6941766,
      },
    ];


  const mockBidsData =  [
      {
        price: 2597,
        quantity: 6931074,
      },
    ];


  return (
    <div className="contract flex flex-col items-center w-36 min-w-0">
      <h3 className="text-sm w-full overflow-hidden whitespace-nowrap text-ellipsis text-center">
        {contract.name}
      </h3>
      <div className="flex prices gap-2">
        <div className="flex flex-col items-center">
          <button className="bg-green-accent font-bold p-1 rounded-sm w-16 text-sm">
            {mockOffersData[0] ? priceFormatter(mockOffersData[0].price) : null}
          </button>
          <p className="text-grey-300 font-bold text-xs p-1">{mockOffersData[0]
            ? quantityFormatter(mockOffersData[0].quantity, mockOffersData[0].price)
            : null}</p>
        </div>
        <div className="flex flex-col items-center ">
          <button className="bg-blue-accent font-bold p-1 rounded-sm w-16 text-sm">
          {mockBidsData[0] ? priceFormatter(mockBidsData[0].price) : null}
          </button>
          <p className="text-grey-300 font-bold text-xs p-1">{mockBidsData[0]
            ? quantityFormatter(mockBidsData[0].quantity, mockBidsData[0].price)
            : null}</p>
        </div>
      </div>
    </div>
  );
}
