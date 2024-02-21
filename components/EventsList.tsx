import React from "react";
import EventCard from "./EventCard";
import { getEventsFromCity } from "@/lib/utils";

const EventsList = async ({ city }: { city: string }) => {
  const events = await getEventsFromCity(city);

  return (
    <section className="flex max-w-[1100px] flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
