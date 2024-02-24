import React from "react";
import EventCard from "./EventCard";
import { getEventsFromCity } from "@/lib/utils";
import PaginationControls from "./PaginationControls";

const EventsList = async ({ city, page }: { city: string; page: number }) => {
  const { events, totalCount } = await getEventsFromCity(city, page);

  const previousPagePath = page <= 1 ? "" : `/events/${city}?page=${page - 1}`;

  const nextPagePath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex max-w-[1100px] flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls
        previousPagePath={previousPagePath}
        nextPagePath={nextPagePath}
      />
    </section>
  );
};

export default EventsList;
