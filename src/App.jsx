import React from "react";
import PageSelector from "./components/PageSelector";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const handleSelectionChange = (selectedPages) => {
    console.log("Selected pages:", selectedPages);
  };

  return (
    <div className="mt-[85px] flex items-center justify-center">
      <PageSelector totalPages={4} onSelectionChange={handleSelectionChange} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default App;
