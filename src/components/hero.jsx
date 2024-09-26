import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import Image1 from "../assets/me1.jpg";
import Image2 from "../assets/me2.png";
import Image3 from "../assets/me3.jpeg";

const Hero = () => {
  const [animateState, setAnimateState] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const Images = [Image1, Image2, Image3];
    const Interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % Images.length);
    }, 3000);

    return () => clearInterval(Interval);
  }, []);

  const Images = [Image1, Image2, Image3];
  return (
    <div
      ref={heroRef}
      className={`w-screen h-screen relative flex flex-col items-center justify-center duration-1000 ease-in-out pl-[20px] md:w-[1068px] md:h-[150vh] md:flex-col xl:pl-[100px] xl:w-full xl:h-[100vh] xl:justify-between xl:flex-row xl:gap-2`}
    >
      <div
        className={`flex items-center justify-center flex-col text-2xl text-black text-center md:text-center xl:text-left p-[10px] ${
          animateState ? "pop-up" : ""
        }`}
      >
        <div className="">
          <h1>My Name is Kristian Perez</h1>
          <h2>Born on July 2, 2003</h2>
          <h2>And I Want to be become Software Engineer</h2>
          <h2>Skills should Input here</h2>

          <h2>I live in Marulas, Valenzuela City in Philippines</h2>
          <h2>I do things about Web Development</h2>
        </div>
      </div>

      <div
        className={`flex items-center justify-center w-[220px] h-[300px] md:w-[768px] md:h-[300px] md:pt-[200px] relative xl:w-1/2 xl:h-full${
          animateState ? "pop-up" : ""
        }`}
      >
        {Images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`w-[2120px] h-[220px] absolute transition-opacity duration-500 md:w-[370px] md:h-[350px] ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
