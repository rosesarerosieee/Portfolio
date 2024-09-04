import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareGithub, faSquareInstagram, faSquareXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Socials = () => {

    return (
      <>
        <div
          className={`flex items-center justify-center text-center text-[2rem] w-[100%] h-[12vh] bg-[#d7d7d7]`}
        >
          <div
            className={`relative flex items-center justify-center text-center text-[2.5rem] w-[30%] h-[6vh] gap-[20px] `}
          >
            <a
              href="https://www.facebook.com/theyseedaisyy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className={`cursor-pointer 
                        hover:text-white
                        transition-all duration-1000 ease-in-out hover:text-[5rem]`}
              ></FontAwesomeIcon>
            </a>

            <a
              href="https://www.instagram.com/herbertursuwaaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSquareInstagram}
                className={`cursor-pointer hover:text-white transition-all duration-1000 ease-in-out hover:text-[5rem]`}
              ></FontAwesomeIcon>
            </a>

            <a
              href="https://x.com/herbertursuwaaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className={`cursor-pointer hover:text-white transition-all duration-1000 ease-in-out hover:text-[5rem]`}
              ></FontAwesomeIcon>
            </a>

            <a
              href="https://github.com/rosesarerosieee?tab=repositories"
              target="_blank"
              rel="noopener noreferer"
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                className={`cursor-pointer hover:text-white transition-all duration-1000 ease-in-out hover:text-[5rem]`}
              ></FontAwesomeIcon>
            </a>

            <a href="https://www.linkedin.com/in/kristian-perez-a7154a285/" target='_blank' rel='noopener noreferer'>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`cursor-pointer hover:text-white transition-all duration-1000 ease-in-out hover:text-[5rem]`}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </>
    );


};

export default Socials;