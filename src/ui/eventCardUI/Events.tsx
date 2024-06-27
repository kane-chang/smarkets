import { fetchEvents } from "@/lib/data";
import React from "react";
import EventCard from "../eventCardUI/EventCard";
import {EventTypeEnum } from "@/lib/definitions";

interface EventsProps {
    type: EventTypeEnum,
}

export default async function Events({type}: EventsProps) {
  const eventsData = await fetchEvents(type);

  if (!eventsData.events) {
    return <p className="mt-4 text-gray-400">No {type} available.</p>;
  }

  const events = eventsData.events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return <div className="flex flex-col gap-4">{events}</div>;
}
