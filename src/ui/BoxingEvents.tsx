import { fetchEvents } from "@/lib/data";
import { formatEventDate } from "@/lib/Formatter";
import React from "react";
import EventCard from "./EventCard";

export default async function BoxingEvents() {
  const boxingEvents = await fetchEvents("boxing_match", "boxing");

  if (!boxingEvents.events) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const events = boxingEvents.events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return (
    <div className="p-5">
      <h1 className="text-5xl font-bold my-5">Boxing</h1>
      <div className="flex flex-col gap-4">{events}</div>
    </div>
  );
}
