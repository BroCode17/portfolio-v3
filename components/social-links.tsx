import React from "react";

const SocialLinks = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <a href={href} target="_blank" className="p-4 ">
      <div className="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="fab">{icon}</span>
      </div>
    </a>
  );
};

export default SocialLinks;
