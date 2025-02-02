import React from "react";
import { Button } from "@mui/material";
const Hero = () => {
  return (
    <>
      <section className="text-white grid grid-cols-1 md:grid-cols-2 pt-8 md:pt-20 px-5 md:px-9 bg-gray-800" id="hero">
        <div className="">
          <h1 className="font-medium text-2xl lg:text-7xl">
            We Provide <br /> Architectural design <br /> and Construction
          </h1>
          <p className="text-[#C4C4C4] mt-2 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            voluptates. Ab aliquid excepturi minus architecto numquam beatae
            esse amet velit!
          </p>
          <div className="py-1.5 mt-2">
            <Button
              sx={{
                fontSize: "14px",
                background:
                  "linear-gradient(97.65deg, #60bbee 0.33%, #0a72ad 93.35%)",
                color: "white",
              }}
            >
              Discover More
            </Button>
            <div className="mt-15 pb-5 hidden md:block">
              <div className="flex gap-10">
              <div>
                <h2 className="font-bold text-3xl">300<span className="text-4xl text-blue-400">+</span></h2>
                <p>
                  Happy <br /> Client
                </p>
              </div>
              <div>
                <h2 className="font-bold text-3xl">900<span className="text-4xl text-blue-400">+</span></h2>
                <p>
                  Amazing <br /> Project
                </p>
              </div>
              <div>
                <h3 className="font-bold text-2xl">20<span className="text-4xl text-blue-400">+</span></h3>
                <p>
                  Amazing <br /> Award
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end flex">
          <img src="/building.png" alt="building" className="z-0" />
        </div>
      </section>
    </>
  );
};

export default Hero;
