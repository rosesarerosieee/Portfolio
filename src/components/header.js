import { Link } from "react-scroll";
import "../App.css";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#d7d7d7]  z-[999999999]">
        <div className="absolute flex items-center justify-start h-[12vh] pl-[30px] ">
          <Link to="/">
            <h1 className="font-extrabold uppercase cursor-pointer transition-all duration 1000 ease-in-out hover:text-[3rem] hover:text-white">
              Kristian
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-end gap-[20px] h-[12vh] pr-5 text-[1.3rem]">
          <li className="link mr-4">
            <Link
              to="intro"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer transition-all duration-1000 ease-in-out hover:text-[3rem] hover:text-white"
            >
              Intro
            </Link>
          </li>

          <li className="link mr-4">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer transition-all duration-1000 ease-in-out hover:text-[3rem] hover:text-white"
            >
              About
            </Link>
          </li>

          <li className="link mr-4">
            <Link
              to="myproject"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer transition-all duration-1000 ease-in-out hover:text-[3rem] hover:text-white"
            >
              Projects
            </Link>
          </li>

          <li className="link mr-4">
            <Link
              to="socials"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer transition-all duration-1000 ease-in-out hover:text-[3rem] hover:text-white"
            >
              Socials
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
