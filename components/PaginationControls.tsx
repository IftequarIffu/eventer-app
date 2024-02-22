import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const PaginationControls = ({
  previousPagePath,
  nextPagePath,
}: {
  previousPagePath: string;
  nextPagePath: string;
}) => {
  const paginationButtonClasses = `text-white px-5 py-3 bg-white/5 
    rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-sm`;

  return (
    <section className="flex w-full justify-between">
      {previousPagePath ? (
        <Link href={previousPagePath} className={paginationButtonClasses}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPagePath ? (
        <Link href={nextPagePath} className={paginationButtonClasses}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
};

export default PaginationControls;
