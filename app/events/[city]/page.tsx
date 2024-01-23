import React from "react";
import H1 from "@/components/H1";

const EventsPage = ({ params: { city } }: { params: { city: string } }) => {
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[100vh]">
      <H1>
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  );
};

export default EventsPage;
