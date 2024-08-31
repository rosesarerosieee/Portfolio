import { Link } from "react-scroll";
import "../App.css";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-cyan-500 shadow z-[999999999]">
        <ul className="flex items-center justify-end gap-[20px] h-[12vh] pr-5 text-[1.3rem]">
          <li className="link mr-4">
            <Link
              to="intro"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer transition-all duration-1000 ease-in-out hover:text-[3rem] hover:text-red-500"
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
              className="cursor-pointer transition-all duration-1000 ease-in-out hover:text-[3rem] hover:text-red-500"
            >
              Main Section
            </Link>
          </li>

          <li className="link mr-4">
            <Link
              to="mybackground"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer transition-all duration-1000 ease-in-out hover:text-[3rem] hover:text-red-500"
            >
              Background
            </Link>
          </li>

          <li className="link mr-4">
            <Link
              to="socials"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer transition-all duration-1000 ease-in-out hover:text-[3rem] hover:text-red-500"
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
