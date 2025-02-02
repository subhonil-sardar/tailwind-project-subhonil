import { Button } from "@mui/material";
import React from "react";

const About2 = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-7 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-4">
                <div>
                <h1 className="font-bold text-3xl">Our Story <br /> Who We Are</h1>
                </div>
                <div>
                    <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit alias officia dolorum? Corrupti cum aliquid doloribus quam magni dolores quo possimus iste molestiae est impedit, eum error amet laudantium!</p>
                </div>
                <div>
                    <Button variant="contained">
                        See More
                    </Button>
                </div>
            </div>

            <div className="mt-5 md:mt-0">
                <div>
                    <img src="/images7.jpg" alt="image7" className="h-70 w-130" />
                </div>
            </div>
      </div>
    </>
  );
};

export default About2;
