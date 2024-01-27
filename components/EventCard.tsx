import { EventType } from "@/lib/types";
import React from "react";
import Image from "next/image";

const EventCard = ({ event }: { event: EventType }) => {
  return (
    <section className="flex flex-col flex-1 basis-80 h-[380px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden">
      <Image
        src={event.imageUrl}
        alt={event.name}
        height={280}
        width={500}
        className="h-[60%] object-fit"
      />
      <div className="flex flex-col flex-1 justify-center items-center">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{event.location}</p>
      </div>
    </section>
  );
};

export default EventCard;
