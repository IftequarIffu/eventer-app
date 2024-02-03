import React from "react";
import Image from "next/image";

const EventPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await response.json();

  return (
    <main>
      <section className="relative h-[361px] overflow-hidden">
        <Image
          src={event.imageUrl}
          className="object-cover z-0 blur-3xl "
          alt="Event background image"
          quality={50}
          priority
          fill
          sizes="(max-width: 1280) 100vw, 1280px"
        />
        <div className="z-1 relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />
        </div>
      </section>
      <div></div>
    </main>
  );
};

export default EventPage;
