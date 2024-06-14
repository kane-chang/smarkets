import { fetchEvents } from "@/lib/data";
import React from "react";
import EventCard from "@/ui/boxing/EventCard";

export default async function BasketballEvents() {
  const basketballEvents = await fetchEvents("basketball_match", "basketball");

  if (!basketballEvents.events) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const events = basketballEvents.events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return <div className="flex flex-col gap-4">{events}</div>;
}
