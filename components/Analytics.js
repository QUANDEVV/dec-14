import React from "react";
import Typewriter from "typewriter-effect";
import images from "../assets";
import Image from "next/image";

const Predictive = () => {
  return (
    <section
      className="border-2  border-black +"
      style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
    >
      <div className="mt-16 mb-40 ml-3 sm:mb-10">
        <div className="text-6xl sm:text-4xl">
          Proxima AI Platforms
          <br />
          In the News
        </div>
        <div className="flex  gap-4 mt-[108px] sm:overflow-x-auto ">
          <div className="flex-1 p-4 rounded ml-44 sm:ml-0 ">
            {/* <h2 className="mb-4 text-4xl font-semibold"></h2> */}
            <p className="sm:w-[250px] text-[34px] font-[500]">
              Voices of Innovation: Insights from ProximaAI&#39;s Unveiling
              Ceremony
            </p>
          </div>

          <div className="flex flex-col flex-1 p-4 rounded ml-[195]">
            <div className="flex flex-col ">
              <h2 className="text-xl text-[16px] sm:w-[350px]">
                Welcome to a collection of profound insights shared during
                ProximaAI&#39;s groundbreaking unveiling ceremony. Join us as
                visionaries and industry leaders illuminate the essence of
                customer-centric technology, emphasizing the transformative
                power of ProximaAI&#39;s innovative solutions.
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-[114px] mb-[150px] w-auto flex md:ml-0 md:m-2">
          <Image src={images.news} alt="" />
        </div>

        <div className="flex ml-[147px] gap-4 mt-8 sm:overflow-x-auto  sm:ml-0 sm:mt-10">
          <div className="flex-1 p-4 rounded">
            <h2 className=" mb-[13px] text-[12px]">Mr. Edward Oswe Take</h2>
            <h2 className="mb-4 text-xl font-bold">
              Embracing Technological Advancements in Customer Relations
            </h2>

            <p className="sm:w-[250px]">
              &quot;We live in an era where customer satisfaction defines
              success. ProximaAI&#39;s dedication to bridging the gap between
              organizations and their customers is commendable. It&#39;s time we
              leverage technology to enhance customer relations.&quot;
            </p>

            <p className="mt-[30px]">— Mr. Edward Oswe, CEO of MSK:</p>
          </div>

          <div className="flex-1 p-4 rounded">
            <h2 className=" mb-[13px] text-[12px]">Madam Mercy Take</h2>

            <h2 className="mb-4 text-xl font-bold">
              Empowering Customer Relationships Through Community-Driven
              Experiences
            </h2>
            <p className="sm:w-[250px]">
              &quot;ProximaAI&#39;s approach resonates deeply with the essence
              of building strong relationships. The emphasis on community-driven
              experiences is pivotal in today&#39;s customer-centric landscape.
              Let&#39;s engage, understand, and grow together.&quot;
              <br />
              <br />
              {/* <br /> */}
            </p>
            <p className="mt-[30px]">
              — Madam Mercy, Head of Marketing at KBC:
            </p>
          </div>

          <div className="flex-1 p-4 rounded">
            <h2 className=" mb-[13px] text-[12px]">Libaan Atiam Take</h2>

            <h2 className="mb-4 text-xl font-bold">
              Efficiency and Maximization: Transforming Customer Interaction
              Dynamics
            </h2>
            <p className="sm:w-[250px]">
              &quot;ProximaAI&#39;s launch marks a significant step towards
              optimizing customer service. The commitment to channeling
              sentiments and feedback directly to organizations is
              revolutionary. Let&#39;s empower organizations to handle more with
              less.&quot;
              <br />
              <br />
              <br />
            </p>
            <p className="mt-[30px]">— Libaan Atiam, CEO of Atiam College</p>
          </div>

          <div className="flex-1 p-4 rounded">
            <h2 className=" mb-[13px] text-[12px]">Beckham Ochieng Take</h2>
            <h2 className="mb-4 text-xl font-bold">
              A Visionary Shift: Redefining Customer Engagement Through
              Data-Driven Processes
            </h2>
            <p className="sm:w-[250px]">
              &quot;At ProximaAI, we envision a future where organizations
              effortlessly serve their customers. Our launch signifies a new era
              of customer interaction, where data-driven processes optimize
              every aspect of engagement. Let&#39;s transform how organizations
              relate to their customers.&quot;
            </p>
            <br />

            <p className="mt-[30px]">— Beckham Ochieng, CEO of ProximaAI:</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Predictive;
