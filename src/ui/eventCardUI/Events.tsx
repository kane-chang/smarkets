import { fetchEvents } from "@/lib/data";
import React from "react";
import EventCard from "../eventCardUI/EventCard";
import {EventTypeEnum } from "@/lib/definitions";
import { getTypesByName } from "@/lib/categories";


export default async function Events({category}) {
  const types = getTypesByName(category)
  const eventsData = await fetchEvents(types);

  if (!eventsData.events) {
    return <p className="mt-4 text-gray-400">No {category} data available.</p>;
  }

  const events = eventsData.events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return <div className="flex flex-col gap-4">{events}</div>;
}
