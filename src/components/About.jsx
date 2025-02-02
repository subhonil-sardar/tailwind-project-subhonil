import { Button } from "@mui/material";
import React from "react";
import { TbBadgesFilled } from "react-icons/tb";
import About2 from "./About2";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container mx-auto px-4 py-7">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="w-[150px] h-2 bg-blue-700 mb-3"></div>
              <h1 className="font-bold text-3xl text-center md:text-justify">
                What Make Us <br /> Different?
              </h1>
            </div>
            <div>
              <p className="text-gray-500 text-center md:text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, eum! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Reprehenderit saepe eligendi, libero aut
                exercitationem quasi?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
            <div>
            <div className="w-15 h-15 bg-blue-600 rounded-4xl text-4xl flex justify-center items-center text-white">
            <TbBadgesFilled />
            </div>
            <h2 className="font-bold text-2xl">Experienced</h2>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita placeat tempore accusamus exercitationem esse velit fugiat voluptatem nisi earum.</p>
            </div>
            <div>
            <div className="w-15 h-15 bg-blue-600 rounded-4xl text-4xl flex justify-center items-center text-white">
            <TbBadgesFilled />
            </div>
            <h2 className="font-bold text-2xl">Experienced</h2>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita placeat tempore accusamus exercitationem esse velit fugiat voluptatem nisi earum.</p>
            </div>
            <div>
            <div className="w-15 h-15 bg-blue-600 rounded-4xl text-4xl flex justify-center items-center text-white">
            <TbBadgesFilled />
            </div>
            <h2 className="font-bold text-2xl">Experienced</h2>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita placeat tempore accusamus exercitationem esse velit fugiat voluptatem nisi earum.</p>
            </div>
            <div>
            <div className="w-15 h-15 bg-blue-600 rounded-4xl text-4xl flex justify-center items-center text-white">
            <TbBadgesFilled />
            </div>
            <h2 className="font-bold text-2xl">Experienced</h2>
            <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita placeat tempore accusamus exercitationem esse velit fugiat voluptatem nisi earum.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-7">
            <div className="ml-0 md:ml-15 lg:ml-0">
            <div className="block md:flex">
                  <div><img src="/images6.jpg" alt="image6" className="w-100 h-60 relative md:static"/></div>
                  <div className=" w-60 h-50 bg-gray-700 -mt-40 z-10 md:mt-6 shadow-2xl p-2 absolute  md:static ml-9 md:ml-0 z-10">
                      <img src="/subho.jpg" alt="subho" className="w-15 h-15 rounded-4xl ml-25 " />
                      <h2 className="text-2xl font-semibold text-white text-center">Subhonil Sardar</h2>
                    <div className="text-center">
                    <p className=" text-white">Lorem ipsum, dolor sit consectetur adipisicing elit. Rerum, veritatis!</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="pl-7 mt-15 md:mt-0">
            <div className="pb-3">
              <h1 className="text-3xl font-bold">Meet and talk With <br /> our best architecture</h1>
            </div>
            <div>
              <p className="text-xl text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam magnam sapiente vitae quisquam perspiciatis dolor nesciunt harum. Quis, nihil.</p>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="contained">
                See allteam
              </Button>
              <Button variant="outlined">
                How it works 
              </Button>
            </div>
              </div>
          </div>
        </div>
        <About2 />
      </section>
    </>
  );
};

export default About;
