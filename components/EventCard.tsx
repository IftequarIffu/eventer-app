import { EventType } from "@/lib/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@prisma/client";

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="flex-1 basis-80  h-[380px] max-w-[500px] "
    >
      <section className=" w-full h-full flex flex-col flex-1 basis-80  max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
        <Image
          src={event.imageUrl}
          alt={event.name}
          height={280}
          width={500}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] bg-black/30 rouned-md">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
};

export default EventCard;
