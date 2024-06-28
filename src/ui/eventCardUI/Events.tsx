import { fetchEvents } from "@/lib/data";
import React from "react";
import EventCard from "../eventCardUI/EventCard";
import { EventTypeEnum } from "@/lib/definitions";

interface EventsProps {
  types: EventTypeEnum[];
  name: string;
}

export default async function Events({ types, name }: EventsProps) {
  const eventsData = await fetchEvents(types);
  if (!eventsData.events || eventsData.events.length < 1) {
    return <p className="mt-4 text-gray-400">No {name} events available.</p>;
  }

  const events = eventsData.events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return <div className="flex flex-col gap-4">{events}</div>;
}
