"use client";
import { useEffect, useState } from "react";
import DemoNav from "./Demo/sidebar";
import MessagesList from "./Demo/MessageList";
import ChatWindow from "./Demo/ChatWindow";
import { useDispatch } from "react-redux";
import { updateData } from "@/redux/demo-data/demoSlice";
import { demoData } from "./Demo/Data/Data";

export default function DemoComponent() {
  const [activeTab, setActiveTab] = useState("chat");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const dispatch = useDispatch();

  // console.log(demoData)

  useEffect(() => {
    dispatch(updateData(demoData));
  }, [dispatch]);

  return (
    <div>
      {/* View for large devices */}
      <div className="flex flex-row justify-center items-center sm:hidden  ">
        <div className="flex flex-row md:flex-col md:justify-center md:items-center">
          <div className="flex space-x-10">
            <DemoNav />
            <MessagesList />
            <div className="px-1 w-full">
              <ChatWindow />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for small devices */}
      <div className="hidden sm:block mb-4">
        <div className="hidden sm:block gap-2">
          <div className="flex mb-4 space-x-4 justify-around">
            <button
              className={`w-1/3 tab-btn p-2 rounded  ${
                activeTab === "chat" ? "bg-[#53B4B0] text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("chat")}
            >
              Options
            </button>
            <button
              className={`w-1/3 tab-btn p-2 rounded  ${
                activeTab === "formResponse"
                  ? "bg-[#53B4B0] text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("formResponse")}
            >
              Context
            </button>
            <button
              className={`w-1/3 tab-btn p-2 rounded  ${
                activeTab === "info" ? "bg-[#53B4B0] text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabChange("info")}
            >
              chat
            </button>
          </div>
        </div>
        {/* Content for all devices */}
        <div className="flex flex-col sm:flex-col md:flex-col">
          {activeTab === "chat" && <DemoNav />}
          {activeTab === "formResponse" && <MessagesList />}
          {activeTab === "info" && <ChatWindow />}
        </div>
      </div>
    </div>
  );
}
