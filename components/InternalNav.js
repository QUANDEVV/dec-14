import React from "react";

function InternalNav() {
  const navLinks = [
    {
      title: "Search Engine",
      description: "Activate and Control AI on Your Private Network",
      exploreText: "Explore Search Engine",
    },
    {
      title: "Chat Analysis",
      description: "Operating System for the Modern Enterprise",
      exploreText: "Explore Chat Analysis",
    },
    {
      title: "Chat Interactions",
      description: "Operating System for Global Decision Making",
      exploreText: "Explore Chat Interaction",
    },
    {
      title: "Community",
      description: "Operating System for Continuous Delivery",
      exploreText: "Explore Community",
    },
  ];
  return (
    <div>
      <div className=" flex flex-row justify-between border-b border-black mt-[62px] pb-[103px] md:flex-col md:justify-end">
        <h2 className="text-5xl font-normal tracking-tight leading-60">
          Platforms
        </h2>
        <h2 className="text-2xl font-normal leading-10 ">
          Foundational Software of Tomorrow. <br></br> Delivered Today.™
        </h2>
      </div>

      {/* Dynamic Internal Nav Links */}
      <div>
        {/* Other content */}
        {navLinks.map((link, index) => (
          <InternalNavLink key={index} {...link} />
        ))}
        {/* Other content */}
      </div>
    </div>
  );
}

export default InternalNav;

/**
|--------------------------------------------------
| Internal Nav Link
|--------------------------------------------------
*/

const InternalNavLink = ({ title, description, exploreText }) => {
  return (
    <div className="flex flex-row justify-between border-b border-black mt-[62px] pb-[115px] md:flex-col md:justify-end ">
      <h2 className="text-xl font-normal tracking-tight leading-48">
        ↳ {title}
      </h2>

      <h2 className="text-base font-normal leading-6">{description}</h2>
      <small className="text-sm font-normal leading-5">{exploreText}</small>
    </div>
  );
};
