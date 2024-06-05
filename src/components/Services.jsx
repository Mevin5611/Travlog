import React from "react";
import destinantion from '../assets/img/destination 1.png'
import booking from '../assets/img/booking 1.png'
import cloudy from '../assets/img/cloudy 1.png'

const Services = () => {
  return (
    <div>
      <div className="md:ms-[83px] w-full h-[571px] md:grid md:grid-cols-12">
        <div className="col-span-3 flex justify-center md:justify-start items-center">
          <div>
            <h1 className="tracking-widest text-[#F85E9F] font-semibold text-lg text-center md:text-left">
              SERVICES
            </h1>
            <h3 className="font-[650]  text-[35px] md:text-[38px] text-center md:text-left m-3">
              Our top value <br className="hidden md:block" /> categories <br className="md:hidden"/> for you
            </h3>
          </div>
        </div>
        <div className="col-span-9 flex justify-center md:justify-start items-center">
          <div className="flex flex-col md:flex-row">
            <div className="w-[350px] h-[300px] md:h-[443px] rounded-[32px] border border-[#1918251A] flex flex-col justify-center items-center">
                <div>
                    <img className="w-[64px] h-[64px]" src={destinantion} alt="" />
                </div>
                <div className="w-[222px] h-[153px] text-center mt-[32px]">
                    <h1 className="font-bold text-xl">Best Tour Guide</h1>
                    <p className="text-center mt-5 text-[#19182580]">What looked like a small <br /> patch of purple grass, <br /> above five feet.</p>
                </div>
            </div>
            <div className="w-[350px] h-[300px] md:h-[443px]  rounded-[32px] shadow-lg flex flex-col justify-center items-center md:ms-5">
                <div>
                    <img className="w-[64px] h-[64px]" src={booking} alt="" />
                </div>
                <div className="w-[222px] h-[153px] text-center mt-[32px]">
                    <h1 className="font-bold text-xl">Easy Booking</h1>
                    <p className="text-center mt-5 text-[#19182580]">Square, was moving <br /> across the sand in their <br />direction.</p>
                </div>
            </div>
            <div className="w-[350px] h-[300px] md:h-[443px]  rounded-[32px] shadow-lg flex flex-col justify-center items-center md:ms-5">
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
