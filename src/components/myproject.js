import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import TodoList from '../assets/To-do-list.png'
import TodoListMobile from '../assets/to-do-list(1).png';


const MyProjects = () => {

  const [animateState, setAnimateState] = useState(false);
  const MyprojectRef = useRef(null);

  const TriggerAnimation = () => {
    setAnimateState(true);
  };

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          TriggerAnimation();
        } else {
          setAnimateState(false);
        }
      }, {threshold:0.5}
    )
    if (MyprojectRef.current) {
      observer.observe(MyprojectRef.current);
    }
    
    return () => {
      if (MyprojectRef.current) {
        observer.unobserve(MyprojectRef.current)
      }
    }

  }, []);


  return (
    <div
      ref={MyprojectRef}
      className={`grid grid-cols-[repeat(2,650px)] grid-rows-[repeat(3,full)] relative w-full h-[200vh] items-start justify-center ${
        animateState ? "pop-up" : ""
      }`}
    >
      <div className="grid grid-cols-2 gap-[10px] w-full h-full">
        {/* Desktop Container */}
        <div className="relative w-[350px] h-[250px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg pr-[20px]">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src={TodoList}
              className="w-full h-full object-cover"
              alt="To-do list"
            />
          </div>
          {/* Bottom Bar (where the stand connects) */}
          <div className="absolute bottom-0 left-0 w-full h-[14%] bg-gray-500"></div>
        </div>

        {/* iPhone Container */}
        <div className="relative w-[170px] h-[250px] bg-white rounded-[40px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
          {/* iPhone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-black rounded-b-[20px]"></div>

          {/* Screen Content */}
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={TodoListMobile}
              className="w-full h-full object-cover"
              alt="To-do list"
            />
          </div>
        </div>

        {/* Centered Element */}
        <div className="col-span-2 flex items-center justify-center">
          <h1 className="text-xl font-bold">Description here</h1>
        </div>
      </div>

      <div className={`flex items-start justify-center flex-row w-full h-full`}>
        <div className="p-[20px] flex items-center justify-center">
          {/* Desktop Container */}
          <div className="relative w-[250px] h-[150px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* Desktop Screen */}
            <div className="absolute top-0 left-0 w-full h-[90%] bg-black"></div>

            {/* Bottom Bar (where the stand connects) */}
            <div className="absolute bottom-0 left-0 w-full h-[14%] bg-gray-500"></div>
          </div>
        </div>

        {/* iPhone Container */}
        <div className="p-[20px] flex items-center justify-center">
          <div className="relative w-[170px] h-[250px] bg-white rounded-[40px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-black rounded-b-[20px]"></div>

            {/* Screen Content */}
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="text-black">Tite kaba boss?</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex items-start justify-center flex-row w-full h-full`}>
        <div className="p-[20px] flex items-center justify-center">
          {/* Desktop Container */}
          <div className="relative w-[250px] h-[150px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* Desktop Screen */}
            <div className="absolute top-0 left-0 w-full h-[90%] bg-black"></div>

            {/* Bottom Bar (where the stand connects) */}
            <div className="absolute bottom-0 left-0 w-full h-[14%] bg-gray-500"></div>
          </div>
        </div>

        {/* iPhone Container */}
        <div className="p-[20px] flex items-center justify-center">
          <div className="relative w-[170px] h-[250px] bg-white rounded-[40px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-black rounded-b-[20px]"></div>

            {/* Screen Content */}
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="text-black">Tite kaba boss?</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex items-start justify-center flex-row w-full h-full`}>
        <div className="p-[20px] flex items-center justify-center">
          {/* Desktop Container */}
          <div className="relative w-[250px] h-[150px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* Desktop Screen */}
            <div className="absolute top-0 left-0 w-full h-[90%] bg-black"></div>

            {/* Bottom Bar (where the stand connects) */}
            <div className="absolute bottom-0 left-0 w-full h-[14%] bg-gray-500"></div>
          </div>
        </div>

        {/* iPhone Container */}
        <div className="p-[20px] flex items-center justify-center">
          <div className="relative w-[170px] h-[250px] bg-white rounded-[40px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-black rounded-b-[20px]"></div>

            {/* Screen Content */}
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="text-black">Tite kaba boss?</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex items-start justify-center flex-row w-full h-full`}>
        <div className="p-[20px] flex items-center justify-center">
          {/* Desktop Container */}
          <div className="relative w-[250px] h-[150px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* Desktop Screen */}
            <div className="absolute top-0 left-0 w-full h-[90%] bg-black"></div>

            {/* Bottom Bar (where the stand connects) */}
            <div className="absolute bottom-0 left-0 w-full h-[14%] bg-gray-500"></div>
          </div>
        </div>

        {/* iPhone Container */}
        <div className="p-[20px] flex items-center justify-center">
          <div className="relative w-[170px] h-[250px] bg-white rounded-[40px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-black rounded-b-[20px]"></div>

            {/* Screen Content */}
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="text-black">Tite kaba boss?</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex items-start justify-center flex-row w-full h-full`}>
        <div className="p-[20px] flex items-center justify-center">
          {/* Desktop Container */}
          <div className="relative w-[250px] h-[150px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* Desktop Screen */}
            <div className="absolute top-0 left-0 w-full h-[90%] bg-black"></div>

            {/* Bottom Bar (where the stand connects) */}
            <div className="absolute bottom-0 left-0 w-full h-[14%] bg-gray-500"></div>
          </div>
        </div>

        {/* iPhone Container */}
        <div className="p-[20px] flex items-center justify-center">
          <div className="relative w-[170px] h-[250px] bg-white rounded-[40px] overflow-hidden border-[14px] border-gray-700 shadow-lg">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-black rounded-b-[20px]"></div>

            {/* Screen Content */}
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="text-black">Tite kaba boss?</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
