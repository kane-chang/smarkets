import { formatEventDate } from "@/lib/Formatter";
import { IoMdCalendar } from "react-icons/io";
import React from "react";
import Link from "next/link";
import { Event } from "@/lib/definitions";
import { fetchContracts, fetchContractsQuotes, fetchMarkets } from "@/lib/data";
import EventCardMarket from "./EventCardMarket";

interface EventCardProps {
  event: Event;
}

export default async function EventCard({ event }: EventCardProps) {
  const marketData = await fetchMarkets([event.id])
  if (!marketData.markets) {
    return <p>No data available</p>
  }


  return (
    <Link href={`/${event.type.domain.replace('_', '-')}/${event.id}${event.full_slug}`}>
      <div className="event-card flex justify-between bg-grey-500 px-3 items-center">
        <div className="event-details py-2">
          <h2 className="font-semibold text-lg">{event.name}</h2>
          <div className="flex items-center gap-1 font-semibold text-grey-300 text-xs">
            <IoMdCalendar />
            <p>
              {event.start_datetime
                ? formatEventDate(event.start_datetime)
                : null}
            </p>
          </div>
        </div>
        <EventCardMarket marketData={marketData}/>
      </div>
    </Link>
  );
}
