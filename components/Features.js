import React from "react";
import Typewriter from "typewriter-effect";

const Features = () => {
  return (
    <section
      className="border-2  border-black +"
      style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
    >
      <div className="mt-16 mb-40 ml-3 sm:mb-10">
        <div className="text-6xl sm:text-3xl sm:font-semibold">
          Empowering Connections:
          <br />
          ProximaAI&#39;s Revolutionary
          <br />
          Approach to Customer Interaction
        </div>

        <div className="flex gap-4 mt-28 sm:overflow-x-auto sm:mt-10">
          <div className="flex-1 p-4 rounded ml-44 sm:ml-0">
            {/* <h2 className="mb-4 text-4xl font-semibold"></h2> */}
            <p className="sm:w-[250px] text-[20px] font-[500]">
              Welcome to ProximaAI – revolutionizing customer interaction. We
              bridge the gap between organizations and their customers using
              cutting-edge technology. Streamline communication, channel
              feedback effectively, and optimize resources for maximum
              efficiency and satisfaction. Let&#39;s boost your interaction
              today!
            </p>
          </div>

          <div className="flex flex-col flex-1 p-4 rounded ">
            <div className="flex flex-col gap-[32px]">
              <h2 className="text-xl sm:w-[350px] ">
                &quot;In a time of unparalleled disruption, Proxima understands
                the criticality for our clients to harness software solutions
                for reliable, secure decision-making in today&#39;s landscape.
              </h2>
              <p className="text-xl sm:w-[250px] ">
                We believe in infusing intelligence into the heart of your
                enterprise, ensuring that every aspect of your operations is
                empowered by cutting-edge technology. Organizations must go
                beyond incremental gains, prioritizing intelligent solutions
                that drive significant impact in their core operations.&quot;
              </p>
            </div>

            <p
              className="relative mt-12 border-2 border-black"
              style={{
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
              }}
            >
              <span
                className="text-4xl absolute top-[-20px] right-1"
                style={{ marginTop: "-6px" }}
              >
                →
              </span>
              Learn more about proxima
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
