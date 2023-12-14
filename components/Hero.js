import Typewriter from "typewriter-effect";
import React from "react";
import Link from "next/link";
// import ai from '../videos/ai.mp4'
import ReactPlayer from "react-player";
import video from "../public/videos/ai.mp4";
// import videos from '../public/videos/Aii.mp4'
import videos from "../public/videos/prox.mp4";

const Hero = () => {
  return (
    <section
      className="border-2 mt-32 border-black + sm:mt-0"
      style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
    >
      <div className=" mb-20 mt-4  ">
        <h1 className="text-8xl font-semibold md:text-5xl  sm:h-[130px]">
          Boost your interaction <br />
          with ProximaAI
        </h1>

        <video className="w-full mx-auto h-auto mt-32 " autoPlay muted loop>
          <source src={videos} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
