import React from "react";
import { useSelector } from "react-redux";

export default function MessagesList() {
  const selectedCompany = useSelector((state) => state.demo.selectedCompany);

  return (
    <div className="sm:w-full w-3/4 h-[70vh] scrollbar-hide  pb-14 overflow-y-scroll shadow-xl lg:mt-0">
      {selectedCompany ? (
        <div className="flex flex-col space-y-5 items-center p-5 w-full">
          <h5 className="text-gray-500 tracking-wider text-2xl font-bold">
            {selectedCompany?.name}
          </h5>

          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Introduction</h2>
            <p className="text-sm">{selectedCompany?.introduction}</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Mission</h2>
            <p className="text-sm">{selectedCompany?.mission}</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Vision</h2>
            <p className="text-sm">{selectedCompany?.vision}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-5 items-center p-5 w-full">
          <h5 className="text-gray-500 tracking-wider text-2xl font-bold">
            No Company Selected
          </h5>
        </div>
      )}
    </div>
  );
}
