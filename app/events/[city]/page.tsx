import React from "react";
import H1 from "@/components/H1";
import { EventType } from "@/lib/types";

const EventsPage = async ({
  params: { city },
}: {
  params: { city: string };
}) => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );

  const events: EventType[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[100vh]">
      <H1>
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
};

export default EventsPage;
