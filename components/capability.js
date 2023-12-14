import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import images from '../assets'


const Capability = () => {
  return (
    <section
      className="border-2  border-black +"
      style={{ borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0 }}
    >
      <div className="ml-3 mb-40 sm:mb-10 mt-16">
        <div className="  text-6xl sm:text-3xl sm:font-semibold">
          Unveiling Proxima Platform
          <br />
          Prowess: Elevating Customer Engagement
        </div>
        <div className="flex  gap-4 mt-8 sm:overflow-x-auto ">
          <div className="flex-1 p-4 rounded">
            <h2 className="text-[34px] mb-4">
              Tech-Infused Customer Interaction:
            </h2>

            <p className="text-[16px] sm:w-[200px]">
              Experience a new level of engagement through state-of-the-art
              technology. ProximaAI brings you cutting-edge solutions designed
              to facilitate impactful connections with your customers. Our
              innovative approach integrates advanced tech to ensure seamless
              and meaningful interactions, enabling you to stay ahead in the
              realm of customer engagement.
            </p>
          </div>

          <div className="flex-1 p-4 rounded">
            <h2 className="font-normal text-[34px]  mb-4">
              Community-Centric Engagement:
            </h2>
            <p className="sm:w-[350px]">
              At ProximaAI, we recognize the power of community in enhancing
              customer experiences. Join our closely bonded customer communities
              where understanding and shared experiences thrive. These forums
              foster a deeper understanding of our products and services,
              allowing you to connect, engage, and learn from each other within
              a supportive network.
            </p>
          </div>

          <div className="flex-1 p-4 rounded">
            <h2 className="text-[34px]  mb-4">Seamless Feedback Channels:</h2>
            <p className="sm:w-[250px]">
              Simplify the feedback process with ProximaAI&#39;s streamlined
              communication channels. Our platform ensures effortless sharing of
              insights, queries, and suggestions. This seamless system enables
              swift and effective responses, guaranteeing that your voice is
              heard and valued in shaping our ongoing improvements.
            </p>
          </div>

          <div className="flex-1 p-4 rounded">
            <h2 className="text-[34px] mb-4">
              Data-Driven Service Optimization:
            </h2>
            <p className="sm:w-[250px]">
              Unlock the potential of data to elevate your service standards.
              ProximaAI empowers you with actionable insights derived from
              robust data analytics. Leverage this information to refine your
              processes, delivering unparalleled service quality that resonates
              with your customers&#39; needs and expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capability
