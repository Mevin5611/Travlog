import React, { useState } from "react";
import leftArrow from "../assets/img/arrow-left 1.png";
import rightArrow from "../assets/img/arrow-left 2.png";
import card1 from "../assets/img/Rectangle 6.png";
import card2 from "../assets/img/Rectangle 6 (1).png";
import card3 from "../assets/img/Rectangle 6 (2).png";
import star from "../assets/img/star 1.png";
import mainimg from "../assets/img/Group 9238.png";
import travellogo from "../assets/img/Frame 50.png";
import keylogo1 from "../assets/img/Group 9239.png";
import keylogo2 from "../assets/img/Group 9239 (1).png";
import keylogo3 from "../assets/img/Group 9239 (2).png";
import bg_key from "../assets/img/BACKGROUND.png";
import logo_nav from "../assets/img/logo-nav.png";
import iconf from "../assets/img/iconf.png";
import icont from "../assets/img/icont.png";
import iconi from "../assets/img/iconi.png";
import down from "../assets/img/arrow-circle-down.9 1.png";

const Explore = () => {
  const [company, setCompany] = useState(false);
  const [contact, setContact] = useState(false);
  const [meet, setMeet] = useState(false);
  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        <div className="xl:w-[1184px] h-[867px] xl:mt-[60px] lg:mt-20 mt-[540px]">
          <div className="h-[100px] flex flex-col xl:flex-row justify-between items-center">
            <div>
              <h1 className=" tracking-widest text-[#F85E9F] font-semibold text-lg text-center xl:text-left">
                TOP DESTINATION
              </h1>
              <h3 className="font-[650] text-[35px] xl:text-[38px] ">
                Explore top destination
              </h3>
            </div>
            <div className=" w-full lg:w-[300px] flex justify-between xl:justify-center items-end mt-5 xl:mt-0">
              <div className="w-[64px] h-[64px] xl:w-[100px] xl:h-[100px] rounded-full flex justify-center items-center border">
                <img className="w-[24px] h-[24px]" src={leftArrow} alt="" />
              </div>
              <div className="w-[64px] h-[64px] xl:w-[100px] xl:h-[100px] rounded-full flex justify-center items-center ms-5 bg-[#5D50C6]">
                <img className="w-[24px] h-[24px]" src={rightArrow} alt="" />
              </div>
            </div>
          </div>

          <div className="  h-[575px] mt-[140px] xl:mt-[32px] lg:grid lg:grid-cols-3 ">
            <div className="h-[575px] lg:ms-5 mb-5 xl:mb-0 xl:col-span-1 shadow-md rounded-[32px] ">
              <img src={card1} alt="" />
              <div>
                <div className="m-[32px] h-[101px]">
                  <div className="flex justify-between items-start">
                    <h1 className="font-bold">
                      Paradise Beach,
                      <br /> Bantayan Island
                    </h1>
                    <p className="text-[#F85E9F] font-bold">$550.16</p>
                  </div>
                  <p className="mt-5">Rome, Italy</p>
                </div>
                <div className="flex ps-[32px] items-center">
                  <p className="text-[#FF5722] text-lg font-bold">4.8</p>
                  <img className="w-[24] h-[24] ms-2" src={star} alt="" />
                </div>
              </div>
            </div>
            <div className="h-[575px] lg:ms-5 mb-5 xl:mb-0 xl:col-span-1 shadow-md rounded-[32px] ">
              <img src={card2} alt="" />
              <div>
                <div className="m-[32px] h-[101px]">
                  <div className="flex justify-between items-start">
                    <h1 className="font-bold">
                      Ocean with full of <br /> Colors
                    </h1>
                    <p className="text-[#F85E9F] font-bold">$20.99</p>
                  </div>
                  <p className="mt-5">Maldives</p>
                </div>
                <div className="flex ps-[32px] items-center">
                  <p className="text-[#FF5722] text-lg font-bold">4.5</p>
                  <img className="w-[24] h-[24] ms-2" src={star} alt="" />
                </div>
              </div>
            </div>
            <div className="h-[575px] lg:ms-5 mb-5 xl:mb-0 xl:col-span-1 shadow-md rounded-[32px] ">
              <img src={card3} alt="" />
              <div>
                <div className="m-[32px] h-[101px]">
                  <div className="flex justify-between items-start">
                    <h1 className="font-bold">
                      Mountain View, <br /> Above the cloud
                    </h1>
                    <p className="text-[#F85E9F] font-bold">$150.99</p>
                  </div>
                  <p className="mt-5">United Arab Emeries </p>
                </div>
                <div className="flex ps-[32px] items-center">
                  <p className="text-[#FF5722] text-lg font-bold">5.0</p>
                  <img className="w-[24] h-[24] ms-2" src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[1200px] md:mt-0">
        <div className="mt-[64px] md:w-[1267px] h-[825px]  xl:grid xl:grid-cols-12">
          <div className="col-span-8 ">
            <img src={mainimg} alt="" />
          </div>
          <div className="col-span-4 ">
            <div className="h-[667px] w-[441px] lg:w-[984px] xl:w-[441px] mt-[64px] flex flex-col items-center xl:ms-[0px] lg:ms-[100px]">
              <h1 className="tracking-widest text-[#F85E9F] font-semibold text-lg text-center md:text-left">
                TRAVEL POINT
              </h1>
              <h1 className="font-[650] mt-5 text-[35px] md:text-[38px] text-center xl:text-left">
                We helping you find <br className="hidden xl:block" />
                your dream location
              </h1>
              <div className="absolute mt-[210px] ms-[345px] hidden xl:block">
                <img src={travellogo} alt="" />
              </div>
              <p className="text-[#19182580] mt-5 text-center md:text-left">
                Contrary to popular belief, Lorem Ipsum is not <br /> simply
                random text. It has roots in a piece of <br />
                classical Latin literature from 45 BC.
              </p>
              <div className="mt-16 ">
                <div className=" flex flex-col justify-center md:flex-row">
                  <div className=" w-[350px]  md:w-[180px] h-[150px]  rounded-[32px] border flex justify-center items-center flex-col">
                    <h1 className="text-[#FF5722] font-[700] text-[30px] text-center">
                      500+
                    </h1>
                    <h3 className="text-center mt-2">Holiday Package</h3>
                  </div>
                  <div className="w-[350px]  md:w-[180px] mt-5 md:mt-0 md:ms-5 h-[150px]  rounded-[32px] border flex justify-center items-center flex-col">
                    <h1 className="text-[#FF5722] font-[700] text-[30px] text-center">
                      100
                    </h1>
                    <h3 className="text-center mt-2">Luxury Hotel</h3>
                  </div>
                </div>
                <div className=" flex mt-5 flex-col md:flex-row">
                  <div className="w-[350px]  md:w-[180px] h-[150px]  rounded-[32px] border flex justify-center items-center flex-col">
                    <h1 className="text-[#FF5722] font-[700] text-[30px] text-center">
                      7
                    </h1>
                    <h3 className="text-center mt-2">Premium Airlines</h3>
                  </div>
                  <div className="w-[350px]  md:w-[180px] mt-5 md:mt-0 md:ms-5 h-[150px]  rounded-[32px] border flex justify-center items-center flex-col">
                    <h1 className="text-[#FF5722] font-[700] text-[30px] text-center">
                      2k+
                    </h1>
                    <h3 className="text-center mt-2">Happy Customer</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[600px]  xl:mt-0">
        <div className="xl:w-[1184px]  xl:ms-[83px] h-[800px] xl:grid xl:grid-cols-12">
          <div className="col-span-6 lg:w-[984px] flex flex-col justify-center absolute xl:relative mt-[600px] lg:mt-[900px] xl:mt-0 ">
            <h1 className="tracking-widest text-[#F85E9F] font-semibold text-lg text-center xl:text-left">
              KEY FEATURES
            </h1>
            <h1 className="font-[650] mt-5 text-[35px] xl:text-[38px] text-center xl:text-left">
              We offer best services
            </h1>
            <p className="text-[#19182580] mt-5 text-center xl:text-left">
              Contrary to popular belief, Lorem Ipsum is not simply random
              <br className="hidden lg:block" /> text. It has roots in a piece
              of classical Latin literature
              <br className="hidden xl:block" />
              from 45 BC.
            </p>

            <div className="mt-10 lg:w-[984px] lg:ms-[100px]">
              <div className="lg:w-[500px] h-[164px] flex justify-start items-center m-3 xl:m-0 p-2 xl:p-0">
                <img className="ms-8" src={keylogo1} alt="" />
                <div className="ms-5">
                  <h3 className="font-bold text-lg">We offer best services</h3>
                  <p className="text-[#19182580]">
                    {" "}
                    Lorem Ipsum is not simply random text
                  </p>
                </div>
              </div>
              <div className="lg:w-[500px] h-[164px] flex justify-start items-center border rounded-[32px] m-3 xl:m-0 p-2 xl:p-0">
                <img className="ms-8" src={keylogo2} alt="" />
                <div className="ms-5">
                  <h3 className="font-bold text-lg">We offer best services</h3>
                  <p className="text-[#19182580]">
                    {" "}
                    Lorem Ipsum is not simply random text
                  </p>
                </div>
              </div>
              <div className="lg:w-[500px] h-[164px] flex justify-start items-center m-3 xl:m-0 p-2 xl:p-0">
                <img className="ms-8" src={keylogo3} alt="" />
                <div className="ms-5">
                  <h3 className="font-bold text-lg">We offer best services</h3>
                  <p className="text-[#19182580]">
                    {" "}
                    Lorem Ipsum is not simply random text
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex justify-center xl:items-start ">
            <img className="xl:ms-[83px] ps-20 xl:ps-0" src={bg_key} alt="" />
          </div>
        </div>
      </section>
      <footer className="flex justify-center items-center mt-[540px] lg:mt-[840px] xl:mt-0">
        <div className="xl:w-[1184px] lg:w-[954px] lg:flex lg:flex-col h-[434px] xl:grid xl:grid-cols-12 ">
          <div className="col-span-6  lg:w-[954px] lg:p-10 xl:p-0 ">
            <div className="flex justify-start items-center mt-[64px]">
              <img className="w-[40px] h-[40px]" src={logo_nav} alt="" />
              <h1 className="font-bold ps-3 text-lg">Travlog</h1>
            </div>
            <p className="mt-5">
              Contrary to popular belief, Lorem Ipsum is not simply <br />{" "}
              random text. It has roots in a piece of classical Latin <br />{" "}
              literature from 45 BC.
            </p>
            <div className="flex mt-10">
              <div className="w-[32px] h-[32px] bg-[#ffffff] rounded-full ">
                <img src={iconf} alt="" />
              </div>
              <div className="w-[32px] h-[32px] bg-[#5D50C6] rounded-full ms-3">
                <img src={icont} alt="" />
              </div>
              <div className="w-[32px] h-[32px] bg-[#5D50C6] rounded-full ms-3">
                <img src={iconi} alt="" />
              </div>
            </div>
          </div>

          
          <div className="col-span-6 lg:flex xl:col-span-6 lg:justify-between ">
          <div className="col-span-2 ">
            <ul className="mt-[64px]">
              <li className="font-bold xl:mt-5 flex justify-between">
                <span>Company</span>{" "}
                <div
                  className="lg:hidden "
                  onClick={() => setCompany(!company)}
                >
                  <img src={down} alt="" />
                </div>
              </li>

              {company && company ? (
                <>
                  <li className="mt-4">About</li>
                  <li className="mt-4">Career</li>
                  <li className="mt-4">Mobile</li>
                </>
              ) : (
                <div className="hidden lg:block">
                  <li className="mt-4">About</li>
                  <li className="mt-4">Career</li>
                  <li className="mt-4">Mobile</li>
                </div>
              )}
            </ul>
          </div>
            <div className="">
              <ul className="mt-[64px] ">
                <li className="font-bold xl:mt-5 flex justify-between">
                  <span>Contact</span>{" "}
                  <div
                    className="lg:hidden "
                    onClick={() => setContact(!contact)}
                  >
                    <img src={down} alt="" />
                  </div>
                </li>
                {contact && contact ? (
                  <>
                    <li className="mt-4">Why Travlog?</li>
                    <li className="mt-4">Partner with us</li>
                    <li className="mt-4">FAQ's</li>
                    <li className="mt-4">Blog</li>
                  </>
                ) : (
                  <div className="hidden lg:block row-span-2">
                    <li className="mt-4">Why Travlog?</li>
                    <li className="mt-4">Partner with us</li>
                    <li className="mt-4">FAQ's</li>
                    <li className="mt-4">Blog</li>
                  </div>
                )}
              </ul>
            </div>
            <div className="col-span-2">
              <ul className="mt-[64px] ">
                <li className="font-bold xl:mt-5 flex justify-between">
                  {" "}
                  <span>Meet Us</span>{" "}
                  <div className="lg:hidden " onClick={() => setMeet(!meet)}>
                    <img src={down} alt="" />
                  </div>
                </li>
                {meet && meet ? (
                  <>
                    <li className="mt-4">+00 92 1234 56789</li>
                    <li className="mt-4">info@travlog.com</li>
                    <li className="mt-4 ">
                      205. R Street, New York <br /> BD23200
                    </li>
                  </>
                ) : (
                  <div className="hidden lg:block">
                    <li className="mt-4">+00 92 1234 56789</li>
                    <li className="mt-4">info@travlog.com</li>
                    <li className="mt-4">
                      205. R Street, New York <br /> BD23200
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Explore;
