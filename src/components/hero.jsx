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

    const currentHeroRef = heroRef.current;

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.observe(currentHeroRef);
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
      className={`w-screen h-screen relative flex flex-col items-center justify-start duration-1000 ease-in-out pl-[20px] md:w-[1068px] md:h-[150vh] md:pl-[20px] xl:w-full xl:h-[150vh] xl:items-start xl:justify-between xl:flex-row xl:gap-2 xl:pl-[50px]`}
    >
      <div
        className={`flex flex-col items-center text-center xl:items-start xl:text-left ${
          animateState ? "pop-up" : ""
        }`}
      >
        <h1 className="text-2xl text-black pt-[100px]">
          My Name is Kristian Perez
        </h1>
        <h2 className="text-2xl">Born on July 2, 2003</h2>
        <h2 className="text-2xl">And I Want to become a Software Engineer</h2>
        <h2 className="text-2xl">Skills should Input here</h2>
        <h2 className="text-2xl">
          I live in Marulas, Valenzuela City in Philippines
        </h2>
        <h2 className="text-2xl">I do things about Web Development</h2>
      </div>

      <div
        className={`w-full flex justify-center mt-[20px] md:mt-[40px] xl:mt-[0] xl:w-[50%] ${
          animateState ? "pop-up" : ""
        }`}
      >
        {Images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute w-full h-[220px] transition-opacity duration-500 md:w-[370px] md:h-[350px] xl:h-[350px] ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
