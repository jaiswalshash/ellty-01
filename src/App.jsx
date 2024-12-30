import React from "react";
import PageSelector from "./components/PageSelector";

const App = () => {
  const handleSelectionChange = (selectedPages) => {
    console.log("Selected pages:", selectedPages);
  };

  return (
    <div className="mt-[85px] flex items-center justify-center">
      <PageSelector totalPages={4} onSelectionChange={handleSelectionChange} />
    </div>
  );
};

export default App;
