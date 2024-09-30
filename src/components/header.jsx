import { Link } from "react-scroll";
import { useState } from "react";
import "../App.css"; // Assuming this contains any global styles

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[13vh] flex items-center justify-between bg-[#d7d7d7] z-[999999]">
        {/* Logo */}
        <div className="ml-4">
          <Link
            to="/"
            className="text-xl font-extrabold uppercase cursor-pointer"
          >
            Kristian Dev
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className="mr-4 cursor-pointer z-[100000] xl:hidden"
          onClick={toggleMenu}
        >
          <span
            className={`block w-[25px] h-[3px] bg-black my-[5px] transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-[25px] h-[3px] bg-black my-[5px] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-[25px] h-[3px] bg-black my-[5px] transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 w-[190px] h-[50vh] bg-white flex flex-col items-center justify-center transition-all duration-300 z-[999] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="text-center space-y-10">
            <li className="">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="text-black text-xl hover:text-gray-300"
                onClick={toggleMenu}
              >
                Profile
              </Link>
            </li>
            <li className="">
              <Link
                to="myproject"
                smooth={true}
                duration={500}
                className="text-black text-xl hover:text-gray-300"
                onClick={toggleMenu}
              >
                Background
              </Link>
            </li>
            <li className="">
              <Link
                to="socials"
                smooth={true}
                duration={500}
                className="text-black text-xl hover:text-gray-300"
                onClick={toggleMenu}
              >
                Socials
              </Link>
            </li>
          </ul>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden xl:flex items-center gap-8 pr-8">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-black text-lg hover:text-blue-600 cursor-pointer font-extrabold"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="myproject"
              smooth={true}
              duration={500}
              className="text-black text-lg hover:text-blue-600 cursor-pointer font-extrabold"
            >
              Background
            </Link>
          </li>
          <li>
            <Link
              to="socials"
              smooth={true}
              duration={500}
              className="text-black text-lg hover:text-blue-600 cursor-pointer font-extrabold"
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
