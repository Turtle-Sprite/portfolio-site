import { Link } from 'react-router-dom'
import "./NavBar.scss"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

function NavBar() {
    const [navOpen, setNavOpen] = useState(false)
    const [hiddenHam, setHiddenHam] = useState(false)

    return (
        <>
        <nav className='w-full'>
            <div className='flex justify-between items-end'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='mx-2 xs:text-xs sm:text-2xl md:text-4xl lg:text-4xl'>
                            <Link to='/'>Crystal Sheeley</Link>
                        </h1>
                    </div>
                </div>

                    {/* Medium screens, hamburger */}
                <div className={`px-4 cursor-pointer md:hidden`}>
                    <GiHamburgerMenu style={{ width: "35px", height: "35px" }} onClick={() => {
                        console.log("nav true")
                        setNavOpen((prev) => {
                        return !prev
                        }
                        )}} />
                </div>


                {/* if hamburger is open, display this */}
                {navOpen ?
                <div className='text-center absolute top-0 hamburger mx-auto z-10'>
                <ul className='nav-bar-top block  items-end '>
                    <AiOutlineClose className='icon absolute top-2 right-11' onClick={() => {
                        console.log("nav false")
                        setNavOpen(false)}}/>
                    <li className='nav-item hover:animate-bounce '>
                        <Link style={{ textDecoration: "none" }} to='/'>
                            About
                        </Link>
                    </li>
                    <li className='nav-item hover:animate-bounce '>
                        <Link style={{ textDecoration: "none" }} to='/resume'>
                            Resume
                        </Link>
                    </li>
                    <li className='nav-item hover:animate-bounce '>
                        <Link style={{ textDecoration: "none" }} to='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item hover:animate-bounce '>
                        <Link style={{ textDecoration: "none" }} to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
                </div>
            :
            <ul className='nav-bar-top flex sm:justify-center md:justify-end lg:justify-evenly items-end hidden md:flex'>
            <li className='nav-item hover:animate-bounce mx-2'>
                <Link style={{ textDecoration: "none" }} to='/'>
                    About
                </Link>
            </li>
            <li className='nav-item hover:animate-bounce mx-2'>
                <Link style={{ textDecoration: "none" }} to='/resume'>
                    Resume
                </Link>
            </li>
            <li className='nav-item hover:animate-bounce mx-2'>
                <Link style={{ textDecoration: "none" }} to='/projects'>
                    Projects
                </Link>
            </li>
            <li className='nav-item hover:animate-bounce mx-2'>
                <Link style={{ textDecoration: "none" }} to='/contact'>
                    Contact
                </Link>
            </li>
        </ul>
            
            }
                {/* if hamburger is not open, display this */}
         </div>
        </nav>
        </>
    );
}

export default NavBar;