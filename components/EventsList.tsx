import React from "react";
import { EventType } from "@/lib/types";
import EventCard from "./EventCard";

const EventsList = ({ events }: { events: EventType[] }) => {
  return (
    <section className="flex max-w-[1100px] flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
