import { fetchEvents } from "@/lib/data";
import React from "react";
import EventCard from "../eventCardUI/EventCard";

export default async function BoxingEvents() {
  const boxingEvents = await fetchEvents("boxing_match");

  if (!boxingEvents.events) {
    return <p className="mt-4 text-gray-400">No boxing events available.</p>;
  }

  const events = boxingEvents.events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return <div className="flex flex-col gap-4">{events}</div>;
}
