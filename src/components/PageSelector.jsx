import React, { useState } from "react";

import { toast } from "react-toastify";
import CheckBox from "./CheckBox";

const PageSelector = ({ totalPages, onSelectionChange }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedPages, setSelectedPages] = useState([]);

  const handleSelectAll = () => {
    setSelectAll((prev) => !prev);
    const newSelection = selectAll ? [] : Array.from({ length: totalPages }, (_, i) => i + 1);
    setSelectedPages(newSelection);
    onSelectionChange?.(newSelection);
  };

  const handlePageSelect = (pageNum) => {
    setSelectedPages((prev) => {
      const newSelection = prev.includes(pageNum)
        ? prev.filter((p) => p !== pageNum)
        : [...prev, pageNum];

      setSelectAll(newSelection.length === totalPages);
      onSelectionChange?.(newSelection);
      return newSelection;
    });
  };

  const handleDone = () => {
    const message =
      selectedPages.length > 0
        ? `You selected ${selectedPages.length} page(s): ${selectedPages.join(", ")}`
        : "No pages selected!";
    toast.info(message);
  };

  return (
    <div className="font-montserrat bg-white rounded-md py-5 px-5 w-[370px] border border-[#EEEEEE] shadow-md">
      <div className="border-b border-gray-200 pb-4">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-[#1F2128] font-normal text-sm">All pages</span>
          <CheckBox checked={selectAll} onChange={handleSelectAll} />
        </label>
      </div>

      <div className="py-5 space-y-5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <label key={pageNum} className="flex items-center justify-between cursor-pointer">
            <span className="text-[#1F2128] text-sm">Page {pageNum}</span>
            <CheckBox
              checked={selectedPages.includes(pageNum)}
              onChange={() => handlePageSelect(pageNum)}
            />
          </label>
        ))}
      </div>

      <button
        className="w-full mt-4 bg-[#FFCE22] hover:bg-[#FFD84D] text-[#1F2128] text-[14px] font-normal py-2 px-4 rounded-md transition-colors"
        onClick={handleDone}
      >
        Done
      </button>
    </div>
  );
};


export default PageSelector;
