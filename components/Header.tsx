import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <main>
      <Logo />
      <Link href="/">Home</Link>
      <Link href="/events/all">All Events</Link>
    </main>
  );
};

export default Header;
