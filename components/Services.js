import React from "react";
import images from "../assets";
import Image from "next/image";

const Services = () => {
  return (
    <section
      className=" border-2  border-black +"
      style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
    >
      <div className="flex  mt-[136px] mb-[148px] md:flex-col justify-start sm:mt-[60px] sm:mb-[60px]">
        <div className="text-container">
          <div className="text-5xl font-[400] sm:text-4xl">
            Enhance Customer
            <br />
            Engagement with Proximaai
            <br />
            Virtual
            <br />
            Assistant Solutions
          </div>

          <div className="  p-4 bg-neutral-800 justify-center items-start gap-4 inline-flex mt-[41px]">
            <div className="text-lg font-normal leading-normal text-white ">
              Learn More
            </div>
            <div className="relative flex flex-col items-start justify-start w-5 h-6 text-white" />
            →
          </div>
        </div>

        <div className="flex w-auto ml-60 md:ml-0 md:m-2 sm:mt-10 sm:ml-0 sm:overflow-x-auto">
          <Image src={images.boot} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Services;
