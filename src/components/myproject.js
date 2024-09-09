import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import TodoList from "../assets/To-do-list.png";
import TodoListMobile from "../assets/to-do-list(1).png";
import StudywMe from "../assets/Study-with-me-desktop.png";
import StudywMeMobile from "../assets/Study-with-me-mobile.png";
import Dictionary from "../assets/Dictionary-desktop.png";
import DictionaryMobile from "../assets/Dictionary-mobile.png";

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
      <div className="grid grid-cols-2 gap-[10px] w-full h-full">
        {/* Desktop Container */}
        <div className="flex items-center justify-center">
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
        </div>

        <div className="flex items-center justify-center">
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
        </div>

        {/* Centered Element */}
        <div className="col-span-2 flex items-center justify-center flex-col gap-[20px] text-center w-full">
          <h1 className="text-xl font-bold">
            <span className="uppercase font-extrabold">2-do-list</span> is a web
            app where you can create an account, and create a task. You can mark
            your as a completed and delete them, when its done. This web-app
            will helps you to track your needed to do on your daily lives. The
            task that you can input here, is Unlimited.
          </h1>
          <a
            href="https://studywithme-web-app.netlify.app/"
            target="_blank"
            rel="nonreferrer"
            className="font-extrabold uppercase underline"
          >
            2-do-web-app
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[10px] w-full h-full">
        {/* Desktop Container */}
        <div className="flex items-center justify-center">
          <div className="relative w-[350px] h-[250px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg pr-[20px]">
            <div className="absolute top-0 left-0 w-full h-full">
              <img src={StudywMe} className="w-full h-full" alt="To-do list" />
            </div>
            {/* Bottom Bar (where the stand connects) */}
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
                src={StudywMeMobile}
                className="w-full h-full"
                alt="To-do list"
              />
            </div>
          </div>
        </div>

        {/* Centered Element */}
        <div className="col-span-2 flex items-center justify-center flex-col gap-[20px] text-center">
          <h1 className="text-xl font-bold">
            <span className="uppercase font-extrabold">Study-With-Me</span> is a
            web app that allows you to input tasks for studying and track your
            progress by marking them as done. It includes a timer to help
            monitor your study sessions and features Lofi music to aid
            concentration.
          </h1>
          <a
            href="https://2doweb-app.netlify.app/"
            target="_blank"
            rel="nonreferrer"
            className="font-extrabold uppercase underline"
          >
            Study-With-Me
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[10px] w-full h-full">
        {/* Desktop Container */}
        <div className="flex items-center justify-center">
          <div className="relative w-[350px] h-[250px] rounded-[20px] overflow-hidden border-[14px] border-gray-700 shadow-lg pr-[20px]">
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                src={Dictionary}
                className="w-full h-full object-cover"
                alt="To-do list"
              />
            </div>
            {/* Bottom Bar (where the stand connects) */}
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
                src={DictionaryMobile}
                className="w-full h-full object-cover"
                alt="To-do list"
              />
            </div>
          </div>
        </div>

        {/* Centered Element */}
        <div className="col-span-2 flex items-center justify-center flex-col gap-[20px] text-center">
          <h1 className="text-xl font-bold">
            <span className="uppercase font-extrabold">Dictionary Web App</span>
            is a dynamic and user-friendly application that allows users to
            search for any word and instantly view its definition.
          </h1>
          <a
            href="https://dictionary-rose.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="font-extrabold underline uppercase"
          >
            Dictionary-Web-App
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[10px] w-full h-full">
        {/* Desktop Container */}
        <div className="flex items-center justify-center">
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
        </div>

        <div className="flex items-center justify-center">
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
        </div>

        {/* Centered Element */}
        <div className="col-span-2 flex items-center justify-center flex-col gap-[20px] text-center">
          <h1 className="text-xl font-bold">
            <span className="uppercase font-extrabold">2-do-list</span> is a web
            app where you can create an account, and create a task. You can mark
            your as a completed and delete them, when its done. This web-app
            will helps you to track your needed to do on your daily lives. The
            task that you can input here, is Unlimited.
          </h1>
          <a href="https://2doweb-app.netlify.app/" target="_blank">
            <button className="cursor-pointer">
              <a href="https://2doweb-app.netlify.app/" target="_blank" />
              2-do-web-app
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[10px] w-full h-full">
        {/* Desktop Container */}
        <div className="flex items-center justify-center">
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
        </div>

        <div className="flex items-center justify-center">
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
        </div>

        {/* Centered Element */}
        <div className="col-span-2 flex items-center justify-center flex-col gap-[20px] text-center">
          <h1 className="text-xl font-bold">
            <span className="uppercase font-extrabold">2-do-list</span> is a web
            app where you can create an account, and create a task. You can mark
            your as a completed and delete them, when its done. This web-app
            will helps you to track your needed to do on your daily lives. The
            task that you can input here, is Unlimited.
          </h1>
          <a href="https://2doweb-app.netlify.app/" target="_blank">
            <button className="cursor-pointer">
              <a href="https://2doweb-app.netlify.app/" target="_blank" />
              2-do-web-app
            </button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[10px] w-full h-full">
        {/* Desktop Container */}
        <div className="flex items-center justify-center">
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
        </div>

        <div className="flex items-center justify-center">
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
        </div>

        {/* Centered Element */}
        <div className="col-span-2 flex items-center justify-center flex-col gap-[20px] text-center">
          <h1 className="text-xl font-bold">
            <span className="uppercase font-extrabold">2-do-list</span> is a web
            app where you can create an account, and create a task. You can mark
            your as a completed and delete them, when its done. This web-app
            will helps you to track your needed to do on your daily lives. The
            task that you can input here, is Unlimited.
          </h1>
          <a href="https://2doweb-app.netlify.app/" target="_blank">
            <button className="cursor-pointer">
              <a href="https://2doweb-app.netlify.app/" target="_blank" />
              2-do-web-app
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
