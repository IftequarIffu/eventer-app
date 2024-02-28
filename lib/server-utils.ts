import "server-only";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

export async function getEventsFromCity(city: string, page: number = 1) {
  const events = await prisma.event.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    skip: (page - 1) * 6 || 0,
    take: 6,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.event.count();
  } else {
    totalCount = await prisma.event.count({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
    });
  }

  return {
    events,
    totalCount,
  };
}

export async function getEventFromSlug(slug: string) {
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
}
