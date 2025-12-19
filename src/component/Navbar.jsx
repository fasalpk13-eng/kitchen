import React from "react";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";
import logo8 from "../assets/logo8.svg";
import logo9 from "../assets/logo9.svg";

function Navbar() {
  return (
    
    <div className=" flex flex-col bg-[#1F1D2B] w-23 h-screen items-center  justify-between">
      <div className="">
      <div>
        

 <div className="flex w-20 ml-3 mt-3  ">
        <img src={logo3} alt="" className="w-20 h-20 p-4  hover:bg-[#2D303E] rounded-xl" />
      </div>
      <div className="flex flex-col ml-3 mt-10 gap-10">
        <img src={logo5} alt="" className="w-20 h-12 p-3 hover:bg-[#2D303E] rounded-xl" />
        <img src={logo4} alt="" className="w-20 h-12 p-3 hover:bg-[#2D303E] rounded-xl" />
        <img src={logo6} alt="" className="w-20 h-12 p-3 hover:bg-[#2D303E] rounded-xl" />
        <img src={logo7} alt="" className="w-20 h-12 p-3 hover:bg-[#2D303E] rounded-xl" />
        <img src={logo8} alt="" className="w-20 h-12 p-3 hover:bg-[#2D303E] rounded-xl" />
      </div>

      <div className="flex ml-3 w-20  h-12">
        <img src={logo9}alt=""className="w-20 h-12 p-3  hover:bg-[#2D303E] mt-35 rounded-xl"
        />
      </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
