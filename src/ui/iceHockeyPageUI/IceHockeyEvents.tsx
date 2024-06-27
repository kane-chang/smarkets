import { fetchEvents } from "@/lib/data";
import React from "react";
import EventCard from "../eventCardUI/EventCard";

export default async function IceHockeyEvents() {
  const iceHockeyEvents = await fetchEvents(["ice_hockey_match"]);

  if (!iceHockeyEvents.events) {
    return (
      <p className="mt-4 text-gray-400">No ice hockey events available.</p>
    );
  }

  const events = iceHockeyEvents.events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));

  return <div className="flex flex-col gap-4">{events}</div>;
}
