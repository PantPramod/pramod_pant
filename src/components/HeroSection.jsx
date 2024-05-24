import { useEffect } from "react";
import Cartoon from "./Cartoon";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
 
  return (
    <>
    
      <div className="min-h-screen flex flex-col sm:flex-row relative">
        <div className=" w-full sm:w-[70%] flex items-center min-h-screen">
          <div className="ml-[10%]  sm:ml-[15%] mr-[10%] sm:mr-[40%]  w-auto  p-5 rounded-md border-2  border-black">
            <h1 className="text-[#4731d4fa] font-bold  text-5xl sm:text-6xl ">
              {" "}
              Pramod Pant{" "}
            </h1>
            <h2 className="text-5xl sm:text-6xl font-bold text-black mt-2 ">
              MERN Stack Developer
            </h2>
            <p className="text-black font-semibold mt-5 ">
              I like to craft solid and scalable products with great user
              experiences.
            </p>
            <NavLink to="/bubble-shooter" className="text-red-700 font-bold underline">Play Bubble Shooter</NavLink>
          </div>
        </div>
        <div className=" w-full sm:w-[30%] min-h-[50vh] flex justify-center items-center">
          <div className="w-[80%]  sm:w-[30%] sm:min-h-[30%] p-4 rounded-lg sm:absolute sm:left-[70%] sm:top-[50%]  border-[#010201] sm:-translate-y-1/2 sm:-translate-x-1/2 border-2">
            <Cartoon />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
