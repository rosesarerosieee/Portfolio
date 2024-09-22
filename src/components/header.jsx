import { Link } from "react-scroll";
import "../App.css";

const Header = () => {
  return (
    <>
      <header className="w-screen h-[13vh] fixed top-0 left-0 items-center justify-between bg-[#d7d7d7] z-[999999999] md:w-full md:h-[13vh] ">
        <div className="absolute flex items-center justify-start h-[12vh]  ">
          <Link to="/">
            <h1 className="font-extrabold uppercase cursor-pointer ease-in-out hover:text-white">
              Kristian Dev
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-end w-full h-[12vh] text-[1rem] gap-[5px] md:text-[2rem]">
          <li className="link ">
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

          <li className="link ">
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

          <li className="link ">
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

          <li className="link">
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
