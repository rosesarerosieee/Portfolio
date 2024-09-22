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
    if (MyprojectRef.current) {
      observer.observe(MyprojectRef.current);
    }

    return () => {
      if (MyprojectRef.current) {
        observer.unobserve(MyprojectRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={MyprojectRef}
      className={`w-screen h-auto items-center justify-center relative md:grid md:grid-cols-[repeat(2,650px)] md:grid-rows-[repeat(3,full)] md:gap-[20px] ${
        animateState ? "pop-up" : ""
      }`}
    >
      {projectdata.map((project, index) => (
        <div
          key={index}
          className="w-full flex flex-col items-center justify-center p-4 gap-4 md:grid md:grid-cols-2 md:gap-[10px] md:p-6"
        >
          {/* Project Desktop Container */}
          <div className="flex items-center justify-center">
            <div className="relative  w-[250px] h-[250px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg md:w-[350px] md:h-[250px]">
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
          <div className="flex flex-col items-center justify-center gap-[10px] text-center">
            <h1 className="text-lg font-bold">{project.description}</h1>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="font-extrabold uppercase underline hover:text-blue-500"
            >
              {project.projectName}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
