

import React from "react";
import img2 from "../assets/img2.svg";
import img from "../assets/img.svg";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import { useNavigate } from "react-router-dom";

function First() {
  const navigate = useNavigate();
  return (
    <div
      className="flex bg-black justify-center items-center bg-center bg-cover w-full h-screen"
      style={{ backgroundImage: `url(${img2})` }}
    >
      <div className="flex flex-col justify-between items-center gap-2">
        <div className="relative">
          <img src={img} alt="" />

          <img
            src={logo}
            alt=""
            className=" rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm"
          />

          <img
            src={logo2}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="flex items-center justify-start w-full ">
          <h1 className="text-white  text-2xl text-start mt-5">
            Welcome To Chef Kitchen
          </h1>
        </div>

        <h3 className="font-[montserrat] font-normal text-[16px] leading-none text-white/60 text-start">
          Check out the awesome food experience! It's <br /> super fresh, quick, and
          oh-so tasty!
        </h3>

        <button 
        onClick={() => navigate("/menu")}
        
        className="bg-amber-600 text-white font-normal mt-10 hover:bg-amber-500 mb-10 px-30 py-2">

          Explore Menu
        </button>
      </div>

    </div>
  );
}

export default First;
