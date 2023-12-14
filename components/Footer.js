import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

function Footer() {
  return (
    <div className="flex gap-[56px] mx-0 justify-between sm:flex-col ">
      <div className="flex flex-col   sm:w-full ">
        <p className="text-base font-normal leading-[22.86px]">
          &copy; 2023 Proxima AI Inc. All rights reserved
          <br />
          {/* Nairobi, Kenya */}
        </p>
        <div className="flex flex-row items-center gap-2 my-2">
          <AiFillYoutube className="text-[30px] text-red-500" />
          <FaXTwitter className="text-[20px] text-black" />
          <IoLogoInstagram className="text-[20px] text-pink-500" />
          <IoLogoFacebook className="text-[20px] text-indigo-500" />
        </div>
        <p>Cookie Settings</p>
      </div>
      <div className="grid mb-[20px] grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-4 lg:gap-7 lg:pr-7 justify-between">
        <div>
          <small>Offerings</small>
          <ul>
            <li>Secure Collaboration</li>
            <li>Industries</li>
            <li>Apollo</li>
            <li>Bootcamps</li>
          </ul>
        </div>
        <div>
          <small>Offerings</small>
          <ul>
            <li>Product</li>
            <li>Industries</li>
            <li>Apollo</li>
            <li>Bootcamps</li>
          </ul>
        </div>
        <div>
          <small>Offerings</small>
          <ul>
            <li>Product</li>
            <li>Industries</li>
            <li>Apollo</li>
            <li>Bootcamps</li>
          </ul>
        </div>
        <div>
          <small>Offerings</small>
          <ul>
            <li>Product</li>
            <li>Industries</li>
            <li>Apollo</li>
            <li>Bootcamps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
