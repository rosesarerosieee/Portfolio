import { Link } from "react-scroll";
import "../App.css";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full items-center justify-between h-[13vh] bg-[#d7d7d7] z-[999999999]">
        <div className="absolute flex items-center justify-start h-[12vh]  ">
          <Link to="/">
            <h1 className="font-extrabold uppercase cursor-pointer ease-in-out hover:text-white">
              Kristian Dev
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-end w-full h-[12vh] pr-5 text-[1rem] sm:text-[2rem]">
          <li className="link mr-4">
            <Link
              to="intro"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active-link"
              className="cursor-pointer hover:text-[blue]"
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
              className="cursor-pointer hover:text-[blue]"
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
              className="cursor-pointer  hover:text-[blue]"
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
              className="cursor-pointer hover:text-[blue]"
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
