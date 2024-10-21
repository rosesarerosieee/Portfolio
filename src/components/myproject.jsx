import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import projectdata from "./projectdata/projectdata";

const MyProjects = () => {
  const [animateState, setAnimateState] = useState(false);
  const MyprojectRef = useRef(null);

  const TriggerAnimation = () => {
    setAnimateState(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          TriggerAnimation();
        } else {
          setAnimateState(false);
        }
      },
      { threshold: 0.5 }
    );

    const currentMyProjectRef = MyprojectRef.current

    if (currentMyProjectRef) {
      observer.observe(currentMyProjectRef);
    }

    return () => {
      if (currentMyProjectRef) {
        observer.unobserve(currentMyProjectRef);
      }
    };
  }, []);

  return (
    <div
      ref={MyprojectRef}
      className={`w-screen h-auto items-center justify-center relative md:w-[1068px] xl:grid xl:grid-cols-[repeat(2,650px)] xl:grid-rows-[repeat(1,full)] xl:gap-[30px] xl:w-full xl:h-[200vh] ${
        animateState ? "animate-pop-up" : ""
      }`}
    >
      {projectdata.map((project, index) => (
        <div
          key={index}
          className="w-full flex flex-col items-center justify-center p-4 gap-4 xl:grid xl:grid-cols-2 xl:gap-[10px] xl:p-6 xl:w-full xl:h-full"
        >
          {/* Project Desktop Container */}
          <div className="flex items-center justify-center">
            <div className="relative  w-[250px] h-[250px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg xl:w-[350px] xl:h-[250px]">
              <img
                src={project.desktop}
                className="w-full h-full object-cover"
                alt={project.projectName}
              />
            </div>
          </div>
          {/* Project Mobile Container */}
          <div className="flex items-center justify-center">
            <div className="relative w-[170px] h-[250px] bg-white rounded-[40px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-black rounded-b-[20px]"></div>

              {/* Screen Content */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={project.mobile} // Ensure this points to the mobile image
                  className="w-full h-full object-cover"
                  alt={project.projectName}
                />
              </div>
            </div>
          </div>

          {/* Description and Link */}
          <div className="flex flex-col items-center justify-center gap-[10px] text-center md:gap-[20px] xl:text-center xl:col-span-2 xl:gap-[20px] xl:w-full xl:mt-[20px]">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="font-extrabold uppercase underline cursor-pointer hover:text-blue-300 hover:text-blue-500 md:pt-[20px] md:text-[1.5rem] md:text-blue-500"
            >
              {project.projectName}
            </a>
            <h1 className="text-lg font-bold md:text-[1.4rem] md:pb-[20px]">
              {project.description}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
