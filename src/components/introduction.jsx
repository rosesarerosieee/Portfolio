import React, {useState, useEffect, useRef} from "react";
import '../App.css'

const Intro = () => {

    const [animateState, setAnimateState] = useState(false);
    const introRef = useRef(null);

    const TriggerAnimation =() => {
        setAnimateState(true);
    };

    useEffect(() => { 
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if(entry.isIntersecting){
                    TriggerAnimation();
                } else{
                    setAnimateState(false);
                }
            }, {threshold:0.5 }
      );
      
      const currentIntroRef = introRef.current

        if (currentIntroRef) {
          observer.observe(currentIntroRef);
        }

        return () => {
            if (currentIntroRef) {
              observer.unobserve(currentIntroRef);
            }
        };

    },[]);
    
    return (
      <>
        <div
          ref={introRef}
          className={`w-screen h-[100vh] relative flex  items-center justify-center flex-col gap-10 bg- text-center duration-1000 ease-in-out cyan md:w-[1068px] xl:w-full xl:h-[100vh]`}
        >
          <div
            className={`relative flex items-center justify-center text-center pl-[20px] gap-[30px] xl:h-[20vh] flex-col  ${
              animateState ? "pop-up" : ""
            }`}
          >
            <h1 className="text-[2rem] md:text-6xl text-black">
              Welcome To my Portfolio
            </h1>
            <h2 className="text-[1.5rem] md:text-2xl tex-black">
              In this web page, You'll learn about, My name, age, what am i,
              what I want to be come, my background, and socials.
            </h2>
          </div>
        </div>
      </>
    );


}; 

export default Intro;