import React from "react";

const EventPage = ({ params: { slug } }: { params: { slug: string } }) => {
  return <main>Event name: {slug}</main>;
};

export default EventPage;
