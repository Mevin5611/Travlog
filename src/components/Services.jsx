import React from "react";
import destinantion from '../assets/img/destination 1.png'
import booking from '../assets/img/booking 1.png'
import cloudy from '../assets/img/cloudy 1.png'

const Services = () => {
  return (
    <div>
      <div className="ms-[83px] w-full h-[571px] grid grid-cols-12">
        <div className="col-span-3 flex justify-start items-center">
          <div>
            <h1 className="tracking-widest text-[#F85E9F] font-semibold text-lg">
              SERVICES
            </h1>
            <h3 className="font-[650]  text-[38px]">
              Our top value <br /> categories for you
            </h3>
          </div>
        </div>
        <div className="col-span-9 flex justify-start items-center">
          <div className="flex">
            <div className="w-[350px] h-[443px]  rounded-[32px] border border-[#1918251A] flex flex-col justify-center items-center">
                <div>
                    <img className="w-[64px] h-[64px]" src={destinantion} alt="" />
                </div>
                <div className="w-[222px] h-[153px] text-center mt-[32px]">
                    <h1 className="font-bold text-xl">Best Tour Guide</h1>
                    <p className="text-center mt-5 text-[#19182580]">What looked like a small <br /> patch of purple grass, <br /> above five feet.</p>
                </div>
            </div>
            <div className="w-[350px] h-[443px]  rounded-[32px] shadow-lg flex flex-col justify-center items-center ms-5">
                <div>
                    <img className="w-[64px] h-[64px]" src={booking} alt="" />
                </div>
                <div className="w-[222px] h-[153px] text-center mt-[32px]">
                    <h1 className="font-bold text-xl">Easy Booking</h1>
                    <p className="text-center mt-5 text-[#19182580]">Square, was moving <br /> across the sand in their <br />direction.</p>
                </div>
            </div>
            <div className="w-[350px] h-[443px]  rounded-[32px] shadow-lg flex flex-col justify-center items-center ms-5">
                <div>
                    <img className="w-[64px] h-[64px]" src={cloudy} alt="" />
                </div>
                <div className="w-[222px] h-[153px] text-center mt-[32px]">
                    <h1 className="font-bold text-xl">Best Tour Guide</h1>
                    <p className="text-center mt-5 text-[#19182580]">What looked like a small <br /> patch of purple grass, <br /> above five feet.</p>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
