"use client";
import React, { useEffect, useRef, useState } from "react";
import { BorderBeam } from "./magicui/border-beam";
import SocialLinks from "./social-links";
import { links, socialMediaIcons} from "@/lib/data";
import { SocialLinksType } from "@/lib";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "200px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    links.forEach((link) => {
      const element = document.querySelector(link.url);
      if (element) {
        sectionRefs.current[link.url] = element as any;
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-64 fixed max-lg:-top-1 max-lg:w-full max-lg:z-20 lg:justify-center max-lg:supports-[backdrop-filter]:bg-transparent/50">
      <div className="w-full absolute">
        {/* <BorderBeam
          size={100}
          duration={34}
          delay={20}
          colorFrom="#fefefe"
          colorTo="#6b7280"
        /> */}
        <nav className="backdrop-blur bg-transparent  uppercase" ref={navRef}>
          <ul className="max-lg:flex custom-border">
            {links.map((link: { name: string; url: string }, index) => (
              <li
                key={index}
                className={`border-r border-gray-500/20 w-full  md:pl-4 font-popping-font lg:border-b lg:[&:nth-child(4)]:border-b-0 lg:border-r-0 `}
              >
                <a
                  href={link.url}
                  className={`flex items-center justify-center md:justify-between  text-gray-500 hover:text-white transition-all my-4 ${
                    activeSection === link.url.slice(1) && "text-white"
                  }`}
                >
                  <span className="hidden md:block">{link.name}</span>
                  <div className="flex justify-center items-center w-10  max-md:hidden">
                    <div
                      className={` custom-border  border-dashed rounded-full ${
                        activeSection === link.url.slice(1)
                          ? "border-white custom-spin w-5 h-5 scale-20"
                          : "w-2 h-2"
                      } transition-all  max-md:relative`}
                    ></div>
                  </div>
                  {/* Mobile Nav */}
                  <div className="relative w flex items-center justify-center w-8 h-8 md:hidden">
                    <div
                      className={`absolute -z-10 border border-dashed inset-0 rounded-full
                       
                        ${
                          activeSection === link.url.slice(1)
                            ? "border-white custom-spin"
                            : " border-gray-500"
                        }
                                `}
                    ></div>
                    <span
                      className={`text-gray-500  ${
                        activeSection === link.url.slice(1) && " text-white"
                      } transition-all`}
                    >
                      {link.name.substring(0, 1)}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <ul className="hidden lg:flex">
            {socialMediaIcons.map(
              (link: SocialLinksType) => (
                <div className="icon-cont border border-gray-500/20 border-t-0  w-full flex justify-center items-center border-r-0 last:border-r " key={link.href}>
                  <div className="icons">
                    <SocialLinks href={link.href} icon={link.icon} />
                  </div>
                </div>
              )
            )}
          </ul>
        </nav>
      </div>
      <div className="flex justify-between w-full max-lg:hidden">
        <div className="h-screen w-full flex justify-start   ">
          <div className="w-[1px] h-full bg-gray-500/20 relative -z-10">
            <BorderBeam
              size={90}
              duration={34}
              delay={30}
              colorFrom="#fefefe"
              colorTo="#6b7280"
              
            />
          </div>
        </div>
        <div className="h-screen w-full flex justify-center ">
          <div className="w-[1px] h-full bg-gray-500/20 relative -z-10">
            <BorderBeam
              size={70}
              duration={34}
              delay={20}
              colorFrom="#fefefe"
              colorTo="#6b7280"
            />
          </div>
        </div>
        <div className="h-screen w-full flex justify-end ">
          <div className="w-[1px] h-full bg-gray-500/20 relative -z-10">
            <BorderBeam
              size={40}
              duration={34}
              delay={10}
              colorFrom="#fefefe"
              colorTo="#6b7280"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
