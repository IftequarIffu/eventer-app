import React, { Suspense } from "react";
import H1 from "@/components/H1";
import EventsList from "@/components/EventsList";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";

export function generateMetadata({
  params: { city },
}: {
  params: { city: string };
}) {
  return {
    title: `Events in ${capitalize(city)}`,
  };
}

const EventsPage = async ({
  params: { city },
}: {
  params: { city: string };
}) => {
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[100vh]">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
