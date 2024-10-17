"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormEvent } from "react";

const SearchForm = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) {
      return;
    }
    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="w-full lg:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city..."
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
