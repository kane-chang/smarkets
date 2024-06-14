import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import { IoMdCalendar } from "react-icons/io";
import { formatEventDate } from "@/lib/Formatter";
import { Event } from "@/lib/definitions";
import { fetchEvent } from "@/lib/data";

interface IdEventInfoProps {
  id: Event["id"];
  slug: string[] | undefined;
}

export default async function IdEventInfo({ id, slug }: IdEventInfoProps) {
  const eventData = await fetchEvent(id);

  if (!eventData.events) {
    return <p>No Event Data Found.</p>;
  }

  const type_domain = eventData.events[0].type.domain;

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: type_domain, href: `/${type_domain}` },
          {
            label: eventData.events[0].name,
            href: slug
              ? `/${type_domain}/${id}/${slug.join("/")}`
              : `/${type_domain}/${id}`,
          },
        ]}
      />
      <div className="event-info border-b border-grey-400 ">
        <h1 className="text-4xl font-bold my-5">{eventData.events[0].name}</h1>
        <div className="flex items-center gap-1 font-semibold text-grey-300 text-xs my-3">
          <IoMdCalendar />
          <p>
            {eventData.events[0].start_datetime
              ? formatEventDate(eventData.events[0].start_datetime)
              : null}
          </p>
        </div>
      </div>
    </>
  );
}
