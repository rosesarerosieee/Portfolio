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
            className={`relative flex items-center justify-center text-center text-[2.5rem] w-30% h-[6vh] gap-[20px] `}
          >
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className={`cursor-pointer 
                        hover:text-white
                        transition-all duration-1000 ease-in-out hover:text-[5rem]`}
            ></FontAwesomeIcon>

            <FontAwesomeIcon
              icon={faSquareInstagram}
              className={`cursor-pointer hover:text-white transition-all duration-1000 ease-in-out hover:text-[5rem]`}
            ></FontAwesomeIcon>

            <FontAwesomeIcon
              icon={faSquareXTwitter}
              className={`cursor-pointer hover:text-white transition-all duration-1000 ease-in-out hover:text-[5rem]`}
            ></FontAwesomeIcon>

            <FontAwesomeIcon
              icon={faSquareGithub}
              className={`cursor-pointer hover:text-white transition-all duration-1000 ease-in-out hover:text-[5rem]`}
            ></FontAwesomeIcon>

            <FontAwesomeIcon
              icon={faLinkedin}
              className={`cursor-pointer hover:text-white transition-all duration-1000 ease-in-out hover:text-[5rem]`}
            ></FontAwesomeIcon>
          </div>
        </div>
      </>
    );


};

export default Socials;