import React from "react";
import work1 from "../assets/img/work 1.png";
import play from "../assets/img/play-circle.5 1.png";
import layer from "../assets/img/layer.png";
import frames from "../assets/img/Frame 15.png";
import send from "../assets/img/send 1.png";
import user from "../assets/img/add-user 1.png";
import location from "../assets/img/location 1.png";
import brand1 from "../assets/img/Group.png";
import brand2 from "../assets/img/Group 2.png";
import brand3 from "../assets/img/Group (1).png";
import brand4 from "../assets/img/Group 9235.png";
import brand5 from "../assets/img/Group 3.png";


const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[1184px] h-[841px] grid grid-cols-12">
        <div className="col-span-4 flex justify-start items-center ">
          <div className="w-[412px] h-[577px]">
            <div className="w-[224px] h-[56px] rounded-full flex justify-center items-center shadow-sm">
              <p className="text-[#F85E9F] font-semibold">Explore the world!</p>
              <img className="ms-2 w-[20px] h-[20px]" src={work1} alt="" />
            </div>
            <h1 className="text-[69px] font-[640] leading-[82px] mt-10">
              Travel{" "}
              <span className="text-[#F85E9F]">
                top <br /> destination
              </span>{" "}
              <br />
              of the world
            </h1>
            <p className="text-[#19182580] mt-10">
              We always make our customer happy by <br /> providing <br />
              as many choices as possible{" "}
            </p>
            <div className="flex mt-10">
              <button className="w-[141px] h-[49px] bg-[#5D50C6] text-white rounded-full shadow-md">
                Get Started
              </button>
              <div className="ms-2 w-[181px] h-[49px] bg-[#ffffff] text-white rounded-full flex justify-center items-center border">
                {" "}
                <img className="h-[24px] w-[24px]" src={play} alt="" />
                <span className="text-black font-semibold ms-2">
                  Watch demo
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-8 flex   flex-col relative">
          <div className="absolute inset-0 flex  items-center  flex-col">
            <img className="mt-[64px] absolute inset-0" src={layer} alt="" />

            <img
              className="w-[575px] h-[632px] z-10 relative mt-[140px]"
              src={frames}
              alt=""
            />
          </div>
          
          <div className=" mt-[400px] ms-[80px] w-[64px] h-[64px] z-20 relative bg-[#F85E9F] rounded-full flex justify-center items-center ">
            <img src={send} alt="" />
          </div> 
          <div className=" mt-[90px] ms-[610px] w-[166px] h-[64px] z-20 relative bg-[#ffffff] rounded-s-full flex justify-center items-center shadow-md">
            <img src={location} alt="" />
            <p className="ms-2">Top Places</p>
          </div> 

          <div className=" mt-[100px] ms-[490px] w-[64px] h-[64px] z-20 relative bg-[#FF5722] rounded-full flex justify-center items-center ">
            <img src={user} alt="" />
          </div>
          
        </div>
      </div>
      <div className="w-[1184px] h-[160px] flex justify-between items-center">
            
            
                <div><img src={brand1} alt="" /></div>
                <div><img src={brand2} alt="" /></div>
                <div><img src={brand3} alt="" /></div>
                <div><img src={brand4} alt="" /></div>
                <div><img src={brand5} alt="" /></div>
            
            
      </div>
    </div>
  );
};

export default Hero;
