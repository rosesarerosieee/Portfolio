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
      className={`grid grid-cols-[repeat(2,650px)] grid-rows-[repeat(3,full)] gap-[20px] relative w-full h-[200vh] items-start justify-center ${
        animateState ? "pop-up" : ""
      }`}
    >
      {projectdata.map((project, index) => (
        <div key={index} className="grid grid-cols-2 gap-[10px] w-full h-full">
          {/* Desktop Container */}
          <div className="flex items-center justify-center">
            <div className="relative w-[350px] h-[250px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg pr-[20px]">
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src={project.desktop}
                  className="w-full h-full object-cover"
                  alt={project.projectName}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[14%] bg-gray-500"></div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* iPhone Container */}
            <div className="relative w-[170px] h-[250px] bg-white rounded-[40px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-black rounded-b-[20px]"></div>

              {/* Screen Content */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={project.desktop}
                  className="w-full h-full object-cover"
                  alt={project.projectName}
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center flex-col gap-[20px] text-center w-full">
            <h1 className="text-xl font-bold">{project.description}</h1>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="font-extrabold uppercase underline hover:text-[blue]"
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
