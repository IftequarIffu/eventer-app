import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEventsFromCity(city: string) {
  const events = await prisma.event.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  return events;
}

export async function getEventFromSlug(slug: string) {
  const event = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
  });

  return event;
}
