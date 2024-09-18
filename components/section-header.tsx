import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h1 className="outline-text-stroke-1 text-5xl text-right -mt-2 transition-all">
      {title}
    </h1>
  );
};

export default SectionHeader;
