import React from "react";
import RenderIcon from "./rendericon";

const SocialLinks = ({
  icon,
  href,
}: {
  icon: string;
  href: string;
}) => {
  return (
    <a href={href} target="_blank" className="p-4 ">
      <div className="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="fab">
          <RenderIcon name={icon} />
        </span>
      </div>
    </a>
  );
};

export default SocialLinks;
