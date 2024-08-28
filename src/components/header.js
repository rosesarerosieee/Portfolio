
import {Link } from 'react-router-dom';

const Header = () => {

    return(
        <>
        <header className='fixed  top-0 left-0 w-full bg-cyan-500 shadow z-99999999'>
        <ul className='flex items-center justify-end h-[12vh] pr-5'>

            <li className='mr-4'>
                <Link to="intro" smooth={true} duration={500} className='cursor-pointer'>
                    Intro
                </Link>
            </li>
                

            <li className='mr-4'>
                <Link to="hero" smooth={true} duration={500} className='cursor-pointer'>
                    Main Section
                </Link>
            </li>
        </ul>
        </header>
        </>
    )

};

export default Header;