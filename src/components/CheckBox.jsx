import { useState } from "react";

const CheckBox = ({ checked, onChange }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    onChange(e);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <div className="relative flex group">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleClick}
        className={`appearance-none w-6 h-6 rounded-md border-[1px] border-[#CDCDCD] 
          hover:border-[#BDBDBD] checked:bg-[#2469F6] checked:border-blue-500 
          checked:hover:bg-[#5087F8] checked:hover:border-blue-600 cursor-pointer transition-all duration-200 
          ${isClicked ? "ring-2 ring-blue-200" : ""}`}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          className="w-7 h-7 text-[#CDCDCD]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            d="M5 13l4 4L19 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            className="w-7 h-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default CheckBox;
