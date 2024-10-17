import Link from "next/link";
import React from "react";

const Logo = () => {
  const title = "Eventer";
  return (
    <Link href="/">
      <h1 className="text-gray-300 font-semibold">
        {title.toLocaleUpperCase()}
      </h1>
    </Link>
  );
};

export default Logo;
