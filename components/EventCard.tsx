import { EventType } from "@/lib/types";
import React from "react";

const EventCard = ({ event }: { event: EventType }) => {
  return <section>{event.name}</section>;
};

export default EventCard;
