import { useState } from "react";
import Checkbox from "./CheckBox";

const PageSelector = ({ totalPages, onSelectionChange }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedPages, setSelectedPages] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedPages(Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      setSelectedPages([]);
    }
    onSelectionChange && onSelectionChange(selectedPages);
  };

  const handlePageSelect = (pageNum) => {
    setSelectedPages((prev) => {
      const newSelection = prev.includes(pageNum)
        ? prev.filter((p) => p !== pageNum)
        : [...prev, pageNum];

      setSelectAll(newSelection.length === totalPages);
      return newSelection;
    });
    onSelectionChange && onSelectionChange(selectedPages);
  };

  return (
    <div className="font-montserrat bg-white rounded-md py-5 px-5 w-[370px] border border-[#EEEEEE] shadow-[0px_0px_4px_rgba(20,_20,_20,_0.1),_0px_8px_15px_rgba(20,_20,_20,_0.12)]">
      <div className="border-b border-gray-200 pb-4">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-[#1F2128] font-normal text-sm">All pages</span>
          <Checkbox checked={selectAll} onChange={handleSelectAll} />
        </label>
      </div>

      <div className="py-5 space-y-5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <label
            key={pageNum}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="text-[#1F2128] text-sm">Page {pageNum}</span>
            <Checkbox
              checked={selectedPages.includes(pageNum)}
              onChange={() => handlePageSelect(pageNum)}
            />
          </label>
        ))}
      </div>
      <hr className="pb-2"/>

      <button className="w-full mt-4 bg-[#FFCE22] hover:bg-[#FFD84D] text-[#1F2128] text-[14px] font-normal py-2 px-4 rounded-md transition-colors">
        Done
      </button>
    </div>
  );
};

export default PageSelector;
