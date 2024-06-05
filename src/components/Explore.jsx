import React from "react";
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

const Explore = () => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center">
        <div className="w-[1184px] h-[867px] mt-[60px]">
          <div className="h-[100px] flex justify-between items-center">
            <div>
              <h1 className=" tracking-widest text-[#F85E9F] font-semibold text-lg">
                TOP DESTINATION
              </h1>
              <h3 className="font-[650]  text-[38px] ">
                Explore top destination
              </h3>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center border">
                <img className="w-[24px] h-[24px]" src={leftArrow} alt="" />
              </div>
              <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center ms-5 bg-[#5D50C6]">
                <img className="w-[24px] h-[24px]" src={rightArrow} alt="" />
              </div>
              <div></div>
            </div>
          </div>

          <div className="h-[575px] mt-[32px] grid grid-cols-3">
            <div className="h-[575px] ms-5 col-span-1 shadow-md rounded-[32px] ">
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
            <div className="h-[575px] ms-5 col-span-1 shadow-md rounded-[32px] ">
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
            <div className="h-[575px] ms-5 col-span-1 shadow-md rounded-[32px] ">
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
      <section>
        <div className="mt-[64px] w-[1267px] h-[825px]  grid grid-cols-12">
          <div className="col-span-8">
            <img src={mainimg} alt="" />
          </div>
          <div className="col-span-4">
            <div className="h-[667px] w-[441px] mt-[64px]">
              <h1 className="tracking-widest text-[#F85E9F] font-semibold text-lg ">
                TRAVEL POINT
              </h1>
              <h1 className="font-[650] mt-5 text-[38px]">
                We helping you find <br />
                your dream location
              </h1>
              <div className="absolute mt-[12px] ms-[235px]">
                <img src={travellogo} alt="" />
              </div>
              <p className="text-[#19182580] mt-5">
                Contrary to popular belief, Lorem Ipsum is not <br /> simply
                random text. It has roots in a piece of <br />
                classical Latin literature from 45 BC.
              </p>
              <div className="mt-14">
                <div className=" flex">
                  <div className="w-[180px] h-[150px]  rounded-[32px] border flex justify-center items-center flex-col">
                    <h1 className="text-[#FF5722] font-[700] text-[30px] text-center">
                      500+
                    </h1>
                    <h3 className="text-center mt-2">Holiday Package</h3>
                  </div>
                  <div className="w-[180px] ms-5 h-[150px]  rounded-[32px] border flex justify-center items-center flex-col">
                    <h1 className="text-[#FF5722] font-[700] text-[30px] text-center">
                      100
                    </h1>
                    <h3 className="text-center mt-2">Luxury Hotel</h3>
                  </div>
                </div>
                <div className=" flex mt-5">
                  <div className="w-[180px] h-[150px]  rounded-[32px] border flex justify-center items-center flex-col">
                    <h1 className="text-[#FF5722] font-[700] text-[30px] text-center">
                      7
                    </h1>
                    <h3 className="text-center mt-2">Premium Airlines</h3>
                  </div>
                  <div className="w-[180px] ms-5 h-[150px]  rounded-[32px] border flex justify-center items-center flex-col">
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
      <section>
        <div className="w-[1184px] ms-[83px] h-[800px] grid grid-cols-12">
          <div className="col-span-6">
            <h1 className="tracking-widest text-[#F85E9F] font-semibold text-lg ">
              KEY FEATURES
            </h1>
            <h1 className="font-[650] mt-5 text-[38px]">
              We offer best services
            </h1>
            <p className="text-[#19182580] mt-5">
              Contrary to popular belief, Lorem Ipsum is not simply random{" "}
              <br /> text. It has roots in a piece of classical Latin literature{" "}
              <br />
              from 45 BC.
            </p>

            <div className="mt-10">
              <div className="w-[549px] h-[164px] flex justify-start items-center">
                <img className="ms-8" src={keylogo1} alt="" />
                <div className="ms-5">
                  <h3 className="font-bold text-lg">We offer best services</h3>
                  <p className="text-[#19182580]">
                    {" "}
                    Lorem Ipsum is not simply random text
                  </p>
                </div>
              </div>
              <div className="w-[549px] h-[164px] flex justify-start items-center border rounded-[32px]">
                <img className="ms-8" src={keylogo2} alt="" />
                <div className="ms-5">
                  <h3 className="font-bold text-lg">We offer best services</h3>
                  <p className="text-[#19182580]">
                    {" "}
                    Lorem Ipsum is not simply random text
                  </p>
                </div>
              </div>
              <div className="w-[549px] h-[164px] flex justify-start items-center">
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
          <div className="col-span-6 flex justify-center items-start">
            <img className="ms-[83px]" src={bg_key} alt="" />
          </div>
        </div>
      </section>
      <footer className="flex justify-center items-center">
        <div className="w-[1184px] h-[434px] grid grid-cols-12 ">
          <div className="col-span-6 ">
            <div className="flex justify-start items-center mt-[64px]">
              <img className="w-[40px] h-[40px]" src={logo_nav} alt="" />
              <h1 className="font-bold ps-3 text-lg">Travlog</h1>
            </div>
            <p className="mt-5">Contrary to popular belief, Lorem Ipsum is not simply <br /> random text. It has roots in a piece of classical Latin <br /> literature from 45 BC.</p>
            <div className="flex mt-10">
              <div className="w-[32px] h-[32px] bg-[#ffffff] rounded-full "><img src={iconf} alt="" /></div>
              <div className="w-[32px] h-[32px] bg-[#5D50C6] rounded-full ms-3"><img src={icont} alt="" /></div>
              <div className="w-[32px] h-[32px] bg-[#5D50C6] rounded-full ms-3"><img src={iconi} alt="" /></div>
            </div>
          </div>
          <div className="col-span-2">
            <ul className="mt-[64px]">
              <li className="font-bold mt-5">Company</li>
              <li className="mt-4">About</li>
              <li className="mt-4">Career</li>
              <li className="mt-4">Mobile</li>
            </ul>
          </div>
          <div className="col-span-2">
          <ul className="mt-[64px]">
              <li className="font-bold mt-5">Contact</li>
              <li className="mt-4">Why Travlog?</li>
              <li className="mt-4">Partner with us</li>
              <li className="mt-4">FAQ's</li>
              <li className="mt-4">Blog</li>
            </ul>
          </div>
          <div className="col-span-2">
          <ul className="mt-[64px]">
              <li className="font-bold mt-5">Meet Us</li>
              <li className="mt-4">+00 92 1234 56789</li>
              <li className="mt-4">info@travlog.com</li>
              <li className="mt-4">205. R Street, New York <br /> BD23200</li>
              
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Explore;
