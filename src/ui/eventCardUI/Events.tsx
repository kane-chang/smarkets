import { fetchEvents } from "@/lib/data";
import React from "react";
import EventCard from "../eventCardUI/EventCard";
import { categories } from "@/lib/categories";
import { CategoryKeys, EventType, EventTypeEnum } from "@/lib/definitions";

interface EventsProps {
    types: EventTypeEnum[],
    name: string,
}

export default async function Events({types, name}: EventsProps) {


  const eventsData = await fetchEvents(types);
  console.log(eventsData.events[0]);
  

  if (!eventsData.events) {
    return <p className="mt-4 text-gray-400">No {name} data available.</p>;
  }

  const events = eventsData.events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return <div className="flex flex-col gap-4">{events}</div>;
}
