import { formatEventDate } from "@/lib/Formatter";
import { IoMdCalendar } from "react-icons/io";
import React from "react";
import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <Link href={`/boxing/${event.id}${event.full_slug}`}>
      <div className="event-card flex justify-between bg-grey-500 px-3 items-center">
        <div className="event-details py-2">
          <h2 className="font-semibold text-lg">{event.name}</h2>
          <div className="flex items-center gap-1 font-semibold text-grey-300 text-xs">
            <IoMdCalendar />
            <p>{formatEventDate(event.start_datetime)}</p>
          </div>
        </div>
        <div className="event-contracts flex gap-4">
          <div className="contract flex flex-col items-center">
            <h3 className="text-sm">contract name</h3>
            <div className="flex prices gap-2">
              <div className="flex flex-col items-center">
                <button className="bg-green-accent font-bold p-1 rounded-sm w-16 text-sm">
                  offer_price
                </button>
                <p className="text-grey-300 font-bold text-xs p-1">offer_qty</p>
              </div>
              <div className="flex flex-col items-center ">
                <button className="bg-blue-accent font-bold p-1 rounded-sm w-16 text-sm">
                  bid_price
                </button>
                <p className="text-grey-300 font-bold text-xs p-1">bid_qty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
