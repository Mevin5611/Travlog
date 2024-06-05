import React, { useState } from 'react'
import logo_nav from "../assets/img/logo-nav.png";
import iconf from "../assets/img/iconf.png";
import icont from "../assets/img/icont.png";
import iconi from "../assets/img/iconi.png";
import down from "../assets/img/arrow-circle-down.9 1.png";

const Footer = () => {
    const [company, setCompany] = useState(false);
    const [contact, setContact] = useState(false);
    const [meet, setMeet] = useState(false);
  return (
    <div>
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
  )
}

export default Footer
