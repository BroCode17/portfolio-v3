"use client";
import { IconCloudComponet } from "@/components/animations/cloud";
import Card from "@/components/card";
import Connect from "@/components/connect";
import EducationAndExp from "@/components/eduction-experience";
import Header from "@/components/header";
import Meteors from "@/components/magicui/meteors";
import ProductComponent from "@/components/projectcard";
import RenderIcon from "@/components/rendericon";
import SectionHeader from "@/components/section-header";
import ShowCode from "@/components/showcodesnip";
import { Spacer } from "@/components/spacer";
import { SocialLinksType } from "@/lib";
import { socialMediaIcons } from "@/lib/data";

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full relative overflow-hidde h-full">
      <div className="absolut inset-0 h-full -z-10 overflow-hidden fixed">
        <Meteors number={30} />
      </div>
      <div className="w-full mt-20">
        <div className="max-w-5xl mx-auto ">
          <h1 className=" max-lg:pl-4 font-name-font text-5xl">
            Ebenezer <span className="outline-text-stroke">Frimpong</span>
          </h1>
          <Header />
          <div className="gap-4 max-lg:px-4">
            {/* Other Section */}
            <section className=" lg:ml-auto custom-border lg:w-[70%]  pb-8  ">
              <section className="flex flex-col" id="about">
                <div className="flex flex-col md:flex-row backdrop-blur-sm">
                  <div className="w-full max-md:py-4 custom-border border-l-0 border-t-0 lg:w-1/3 border-r-0 flex justify-center items-center">
                    <div className="h-[1px] w-full bg-gray-500/20"></div>
                    <img
                      src={"/images/eben.png"}
                      width={160}
                      height={160}
                      alt="Ebenezer Frimpong"
                      className="w-[160px] h-[160px] rounded-full custom-border"
                    />
                    <div className="h-[1px] w-full bg-gray-500/20"></div>
                  </div>

                  <div className="custom-border border-t-0 border-r-0 space-y-2 w-full overflow-hidden max-md:border-l-0 pb-4">
                    <SectionHeader title="About Me" />
                    <div className="px-4 ">
                      <h1 className="custom-header">Software Engineer</h1>
                      {/* Tech Stack */}
                      <div className=" ">
                        <ul className="flex justify-center ">
                          {socialMediaIcons.map(
                            (link: SocialLinksType, index: number) => (
                              <a
                                href={link.href}
                                key={link.name}
                                className={` border border-gray-500/20  py-4  font-popping-font border-r-0 last:border-r flex justify-center w-full h-full`}
                              >
                                <li className="h-full">
                                  <RenderIcon name={link.icon} />
                                </li>
                              </a>
                            )
                          )}
                        </ul>
                      </div>
                      <p className="text-gray-400 mt-4">
                        I am a junior-level Software Engineer at Amorte and
                        Emfip LLC, Sheridan, Wyoming, passionate about tackling
                        challenges and delivering high-quality solutions. With a
                        strong foundation in Most of the programming languages
                        like Java, Pyhton and JavaScript, I excel in developing
                        efficient and scalable applications. I am committed to
                        continuous learning and applying my skills to solve
                        complex problems and drive impactful results. Explore my
                        portfolio to see how I turn challenges into success
                        through innovative coding and effective problem-solving
                      </p>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-sm">
                  <ShowCode show="one" />
                </div>
                <div className="border-b border-b-gray-500/20"></div>
                <div className="overflow-hidden">
                  <SectionHeader title="Tech Stack" />
                </div>
                <section className="backdrop-blur overflow-hidden border-b   border-gray-500/20 ">
                  <h1 className="custom-header ml-4">Framwork & Tools</h1>
                  <IconCloudComponet />
                </section>
              </section>

              <Spacer />
              {/* Projects */}
              <section id="proejcts">
                <Card className="relative">
                  <ProductComponent />
                </Card>
              </section>
              <div className="backdrop-blur-sm border-b border-gray-500/20">
                <ShowCode show="two" />
              </div>
              <Spacer />
              {/* Resume */}
              <section id="resume">
                <Card className="">
                  <SectionHeader title="Resume" />
                  <h1 className="custom-header ml-4">Education & Experience</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="">
                      <EducationAndExp
                        className="border-none"
                        title="Computer and Information Science"
                        date="2020 - 2024"
                        desc="Springfield College"
                        isEducation={true}
                      />
                    </div>
                    <div className="max-md:pt-4">
                      <EducationAndExp
                        title="Full-Stack Developer"
                        desc="Amoarte, Connecticut, Remote"
                        date="2024 - "
                        isEducation={false}
                      />
                      <EducationAndExp
                        title="Software Engineer"
                        desc="Emfip LLC, Wyoming"
                        date="2024 - "
                      />
                    </div>
                  </div>
                </Card>
              </section>
              <Spacer />
              <div className="backdrop-blur-sm border-t border-gray-500/20">
                <ShowCode show="three" />
              </div>
              <section id="contact">
                <Card className="relative border-b-0">
                  <SectionHeader title="Network" />
                  <div className="pl-4 space-y-4">
                    <h1 className="custom-header">Let&apos;s Connect</h1>
                    <div>
                      <p className="text-gray-400">
                        Let's bring your ideas to life! With 1+ years of
                        experience in both front-end and back-end development, I
                        specialize in building modern, responsive, scalable, and
                        high-performance applications. Whether you need seamless
                        API integration, pixel-perfect designs from Figma, or
                        efficient deployment, I'm here to help. Let's
                        collaborate to create something exceptional. Feel free
                        to get in touch!
                      </p>
                    </div>
                  </div>
                  <div>
                    <CustomerLine
                      title="Email: efrimpong@springfieldcollege.edu"
                      desc="Chiago, IL"
                    />
                  </div>
                  <Connect />
                </Card>
              </section>
            </section>
            <footer className="lg:ml-auto  border-b-0 lg:w-[70%] relative mb-10 ">
              <div className="flex items-center absolute bottom-0 py-4 ">
                <div className="w-10 h-[1px] bg-gray-500/20"></div>
                <div className="pl-4 space-y-2 border-l border-gray-500/20">
                  <p className="text-gray-500 hover:text-white transition-all">
                    Design and built by&nbsp;
                    <a
                      href="https://www.linkedin.com/in/efrimpong"
                      className="italic"
                    >
                      efrimpong ❤️
                    </a>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

const CustomerLine = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex items-center">
      <div className="h-[1px] w-12 bg-gray-500/20"></div>
      <div className="pl-4 space-y-2 border-l border-gray-500/20">
        <h2 className="font-popping-font">{title}</h2>
        <p className="text-gray-500">@ {desc}</p>
      </div>
    </div>
  );
};
