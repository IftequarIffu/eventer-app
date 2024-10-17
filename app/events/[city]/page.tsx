import React, { Suspense } from "react";
import H1 from "@/components/H1";
import EventsList from "@/components/EventsList";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

export function generateMetadata({
  params: { city },
}: {
  params: { city: string };
}) {
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

const EventsPage = async ({
  params: { city },
  searchParams: { page },
}: {
  params: { city: string };
  searchParams: { page: string };
}) => {
  const parsedPage = pageNumberSchema.safeParse(page);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[100vh]">
      <H1 className="mb-28">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList
          city={city}
          page={
            parsedPage.data == undefined || page == null || page == "0"
              ? 1
              : parsedPage.data
          }
        />
      </Suspense>
    </main>
  );
};

export default EventsPage;
