import React from "react";
import Typewriter from "typewriter-effect";

const Request = () => {
  return (
    <section>
      <div className="flex  md:flex-col gap-4 mt-[59px] mb-[190px]  ">
        <div className="flex-1  rounded">
          <div className=" font-[500] text-[50px] sm:text-4xl">Request A Demo</div>
        </div>

        <div className="flex gap-2 md:flex-col ml-auto">
          <h2 className=" mt-6 text-[18px] ">
            Now in over 50 sectors and industries worldwide.
          </h2>
          <a
            href="https://app.proximaai.co/"
            class="bg-white text-black border-2 border-black py-2 px-4 w-52 h-10 mt-4"
          >
            Get started →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Request;
