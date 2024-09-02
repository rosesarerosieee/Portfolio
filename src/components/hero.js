import '../App.css';
import React, {useState, useEffect, useRef} from 'react';


const Hero = () => {

    const [animateState, setAnimateState] = useState(false);
    const heroRef = useRef(null);

    const TriggerAnimation = () => {
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
            }, {threshold: 0.5}
        );
        
        if(heroRef.current){
            observer.observe(heroRef.current)
        }
        
        return () => {
            if(heroRef.current){
                observer.unobserve(heroRef.current);
            }
        };
        
    },[]);

    return(
    <div ref={heroRef}className={`flex flex-col items-start justify-center gap-2 w-full h-[100vh] duration-1000 ease-in-out ml-[20px]`}>
        <div className={`text-2xl text-red-500 ${animateState ? 'pop-up' : ''}`}>
            <h1>My Name is Kristian Perez</h1>
            <h2>Born on July 2, 2003</h2>
            <h2>I live in Marulas, Valenzuela City in Philippines</h2>
            <h2>I do things about Web Development</h2>
            <h2>And I Want to be become Software Engineer</h2>
            <h2>Skills should Input here</h2>
            
        </div>
    </div>
    );

};

export default Hero;