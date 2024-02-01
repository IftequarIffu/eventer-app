import React from "react";

const EventPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await response.json();

  return <main>Event name: {event.description}</main>;
};

export default EventPage;
