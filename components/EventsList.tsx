import React from "react";
import EventCard from "./EventCard";
import { Event } from "@prisma/client";

const EventsList = async ({ city }: { city: string }) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: Event[] = await response.json();

  return (
    <section className="flex max-w-[1100px] flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
