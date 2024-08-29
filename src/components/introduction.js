import React, {useState, useEffect, useRef} from "react";


const Intro = () => {

    const [animateState, setAnimateState] = useState(false);
    const introRef = useRef(null);

    const animationHandle =() => {
        setAnimateState(true);
    };

    useEffect(() => { 
        const observer = new IntersectionObserver(
            (enteries) => {
                const entry = enteries[0];
                if(entry.isIntersecting){
                    animationHandle();
                } else{
                    setAnimateState(false);
                }
            }, {threshold:0.5 }
        );

        if(introRef.current){
            observer.observe(introRef.current);

        }

        return () => {
            if(introRef.current){
                observer.unobserve(introRef.current);
            }
        };

    },[]);
    
    return(
        <>
        <div ref={introRef} className={`relative flex items-center justify-center flex-col gap-10 bg-cyan w-full h-screen text-center duration-1000 ease-in-out 
        ${animateState ? "pop-up": ""}`}>
            <h1 className="text-6xl text-red-500">Welcome To my Portfolio</h1>
            <h2 className="text-2xl text-red-500">In this web page, You'll learn about, My name, age, what am i, what I want to be come, my background, and socials.</h2>
        </div>
        </>
    )


}; 

export default Intro;