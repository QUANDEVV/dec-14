import React from "react";
import Link from "next/link";
import images from "../assets";
import Image from "next/image";

const Nav = ({ pageType }) => {
  let links = (
    <>
      <Link href="/Product">
        <div>Product</div>
      </Link>

      <div className="mx-4">Industries</div>
      <div className="mx-4">Apollo</div>
      <div className="mx-4">Bootcamps</div>
    </>
  );

  if (pageType === "product") {
    links = (
      <>
        <Link href="/Product/Report">
          <div className="flex items-center mx-4">Reports</div>
        </Link>

        <Link href="/Product/Dashboard">
          <div className="mx-4">Dashboard</div>
        </Link>

        <Link href="/Product/Community">
          <div className="mx-4">Community</div>
        </Link>

        <Link href="/Product/Survey">
          <div className="mx-4">Survey</div>
        </Link>

        <Link href="/Product/Search">
          <div className="mx-4">Search Engine</div>
        </Link>

        <Link href="/Product/Descriptive">
          <div className="mx-4">Descriptive Analytics</div>
        </Link>

        <Link href="/Product/Predictive">
          <div className="mx-4">Predictive Analysis</div>
        </Link>

        <Link href="/Product/Chatint">
          <div className="mx-4">Chat Interactions</div>
        </Link>

        <Link href="/Product/Chatan">
          <div className="mx-4">Chat Analysis</div>
        </Link>
      </>
    );
  }

  return (
    <div className="flex flex-col mt-10 sm:mt-0 ">
      <div className="flex items-center justify-between">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src={images.logo}
              style={{ objectFit: "contain", width: "130px", height: "60px" }}
              alt="proxima-logo"
            />
          </Link>
        </div>
        <div>
          {/* <Link
            href="/demo"
            className="px-4 py-2 font-bold text-black border border-shark bg-nero "
          >
            Take a Test Drive
          </Link> */}
        </div>
      </div>
      <div className="flex flex-row mt-10 overflow-x-auto">{links}</div>
    </div>
  );
};

export default Nav;
