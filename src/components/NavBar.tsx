import { Link } from "react-router-dom"
import { FaCode } from "react-icons/fa6";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import useViewPort from "../hooks/useViewPort";


const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const size = useViewPort()


  return (
    <header>
      <nav className=" py-3 px-8 flex justify-between items-center shadow-xl">
        <span>
          <Link to="/">
            <img
              src="/favicon-32x32.png"
              alt="logo"
              className="" />
          </Link>
        </span>

        <span
          onClick={() => setShowMobileMenu(prev => !prev)}
          className="sm:hidden cursor-pointer">
          {showMobileMenu ?
            <IoCloseSharp
              size={25}
            /> :
            <FaCode
              size={25}
            />
          }
        </span>

        {size &&

          <ul                                                  //show           //not show    
            style={size !== "xs" || (showMobileMenu) ? {transform: "translateX(0%)"} : { transform: "translateX(100%)" }}
            className=" fixed sm:relative h-[calc(100vh-80px)]  sm:h-[unset] transition-all ease-in-out duration-300 right-0 sm:right-[unset] top-[calc(80px-24px)] sm:top-[unset] w-[80%] max-w-[350px] sm:w-[unset] sm:max-w-[unset] flex flex-col sm:flex-row items-start sm:items-center px-10 py-8 sm:p-0 text-xl gap-y-8  gap-x-4 font-bold sm:text-sm uppercase bg-white z-[999] shadow-lg sm:shadow-none">
            <li>
              <Link
                onClick={() => setShowMobileMenu(false)}
                to="/projects" className="hover:text-blue-700">
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMobileMenu(false)}
                to="/coding-problems" className="hover:text-blue-700">
                Coding Problems
              </Link>
            </li>
            <li>
              <Link 
               onClick={() => setShowMobileMenu(false)}
              to="/blogs" className="hover:text-blue-700">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMobileMenu(false)}
                to="/about-me" className="hover:text-blue-700">
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMobileMenu(false)}
                to="/contact-us" className="hover:text-blue-700">
                Contact 
              </Link>
            </li>
          </ul>
        }


      </nav>
    </header>
  )
}

export default NavBar
