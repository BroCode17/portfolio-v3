  <div className="mt-20 max-w-5xl mx-auto">
        {/* Name */}
        <h1 className="font-name-font text-5xl">
          Ebenezer <span className="outline-text-stroke">Frimpong</span>
        </h1>
        <div className="flex w-full gap-10 backdrop-blur bg-background supports-[backrop-fliter]:bg-background/60">
          <div
            className="fixed custom-border
          bg-transparent backdrop-blur supports-[backdrop-filter]:bg-transparent/10 w-64"
          >
            <nav>
              <ul className="">
                {links.map((link: { name: string; url: string }) => (
                  <li
                    key={link.name}
                    className="border border-gray-500/20 w-full py-4 pl-4"
                  >
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
              <ul className="flex">
                {socialMediaIcons.map(
                  (link: { name: string; icon: React.ReactNode }) => (
                    <li
                      key={link.name}
                      className="border border-gray-500/20 w-full py-4 pl-4"
                    >
                      <a href={link.name}>{link.icon}</a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="w-[70%] h-[1000px] ml-auto">
            <div className="flex flex-col custom-bolder">
              <div className="flex">
                <div className="custom-border border-r-0 w-1/3">Image</div>
                <div className="custom-border space-y-2 w-full overflow-hidden">
                  <h1 className="outline-text-stroke-1 text-5xl text-right -mt-2 ">
                    About Me
                  </h1>
                  <div>
                    <h1 className="custom-header">Software Egineer</h1>
                    {/* Tech Stack */}
                    <div className=" ">
                      <ul className="flex">
                        {socialMediaIcons.map(
                          (link: { name: string; icon: React.ReactNode }) => (
                            <li
                              key={link.name}
                              className="border border-gray-500/20 w-full py-4 pl-4"
                            >
                              <a href={link.name}>{link.icon}</a>
                            </li>
                          )
                        )}
                      </ul>
                      {/* <div className="p-4">
                      <span className=" border-2 border-dashed border-gray-500/20 rounded-xl p-4">
                      React
                      
                      </span>
                    </div> */}
                    </div>
                    <p className="text-gray-400 mt-4">
                      I am a mid-level Software Engineer at E. B. Solutions,
                      Dhaka, Bangladesh, passionate about tackling challenges
                      and delivering high-quality solutions. With a strong
                      foundation in JavaScript, my favorite programming
                      language, I excel in developing efficient and scalable
                      applications. I am committed to continuous learning and
                      applying my skills to solve complex problems and drive
                      impactful results. Explore my portfolio to see how I turn
                      challenges into success through innovative coding and
                      effective problem-solving
                    </p>
                  </div>
                </div>
              </div>
              <div className="custom-bolder">1 years</div>
            </div>
          </div>
        </div>
      </div>