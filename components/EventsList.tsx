import React from "react";
import { EventType } from "@/lib/types";
import EventCard from "./EventCard";

const EventsList = ({ events }: { events: EventType[] }) => {
  return (
    <>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </>
  );
};

export default EventsList;
