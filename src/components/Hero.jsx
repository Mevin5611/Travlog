import React from "react";
import work1 from "../assets/img/work 1.png";
import play from "../assets/img/play-circle.5 1.png";

import frames from "../assets/img/herobg.png";


import brand1 from "../assets/img/Group.png";
import brand2 from "../assets/img/Group 2.png";
import brand3 from "../assets/img/Group (1).png";
import brand4 from "../assets/img/Group 9235.png";
import brand5 from "../assets/img/Group 3.png";


const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col ps-5 xl:ps-0">
      <div className=" xl:w-[1184px] xl:h-[841px] xl:grid xl:grid-cols-12">
        <div className="xl:col-span-4 flex justify-start items-center mt-[450px] lg:mt-[800px] xl:mt-[0px] absolute left-6 xl:left-0 xl:relative">
          <div className="lg:w-[984px] xl:w-[412px] ps-3 xl:ps-0 h-[577px] flex flex-col justify-center items-center">
            <div className="xl:w-[224px] h-[56px] rounded-full flex justify-center items-center shadow-sm">
              <p className="text-[#F85E9F] font-semibold">Explore the world!</p>
              <img className="ms-2 w-[20px] h-[20px]" src={work1} alt="" />
            </div>
            <h1 className="text-[69px] font-[640] leading-[82px] mt-10 text-center xl:text-left">
              Travel{" "}
              <span className="text-[#F85E9F]">
                top <br className="lg:hidden" /> destination
              </span>{" "}
              <br />
              of the world
            </h1>
            <p className="text-[#19182580] mt-10 text-center xl:text-left">
              We always make our customer happy by <br className="hidden xl:block" /> providing <br />
              as many choices as possible{" "}
            </p>
            <div className="flex flex-col lg:flex-row mt-10">
              <button className=" w-[300px] lg:w-[141px] h-[49px] bg-[#5D50C6] text-white rounded-full shadow-md">
                Get Started
              </button>
              <div className=" mt-3 lg:mt-0 xl:ms-2 w-[300px] lg:w-[141px] h-[49px] bg-[#ffffff] text-white rounded-full flex justify-center items-center border">
                {" "}
                <img className="h-[24px] w-[24px]" src={play} alt="" />
                <span className="text-black font-semibold ms-2">
                  Watch demo
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-8 flex justify-center items-start m-3 xl:m-0 ">
          <img className=" xl:mt-14 " src={frames} alt="" />
          
        </div>
      </div>
      <div className="xl:w-[1184px] h-[160px] flex flex-col xl:flex-row justify-center items-center mt-[600px] xl:mt-0 m-3">
            
            
                <div className="grid grid-cols-3  mt-5">
                <div className="col-span-1 flex items-center justify-center"><img src={brand1} alt="" /></div>
                <div className="col-span-1 flex items-center justify-center"><img src={brand2} alt="" /></div>
                <div className="col-span-1 flex items-center justify-center"><img src={brand3} alt="" /></div></div>
                <div className="grid grid-cols-2   mt-5 xl:mt-0">
                <div className="col-span-1 flex items-center justify-center "><img src={brand4} alt="" /></div>
                <div className="col-span-1 flex items-center justify-center"><img src={brand5} alt="" /></div>
                </div>
            
            
      </div>
    </div>
  );
};

export default Hero;
