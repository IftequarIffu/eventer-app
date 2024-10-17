import React from "react";
import SkeletonCard from "@/components/SkeletonCard";

const Loading = () => {
  return (
    <div className="flex flex-wrap max-w-[1100px] justify-center mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((item, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default Loading;
