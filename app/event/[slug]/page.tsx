import React from "react";
import Image from "next/image";
import H1 from "@/components/H1";
import { getEventFromSlug } from "@/lib/utils";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const event = await getEventFromSlug(slug);

  return {
    title: `Event: ${event?.name}`,
  };
}

const EventPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const event = await getEventFromSlug(slug);

  if (event == null) {
    return "Please wait";
  }

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          className="object-cover z-0 blur-3xl "
          alt="Event background image"
          quality={50}
          priority
          fill
          sizes="(max-width: 1280) 100vw, 1280px"
        />
        <div className="z-1 flex flex-col lg:flex-row gap-x-6 lg:gap-16 relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover "
          />
          <div className="flex flex-col ">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button
              className="bg-white/10 text-lg capitalize lg:mt-auto 
            mt-5 w-[95vw] sm:w-full py-2 rounded-md border-white/90 
            border-2 bg-blur state-effects"
            >
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16 min-h-75">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
      {children}
    </p>
  );
}

export default EventPage;
