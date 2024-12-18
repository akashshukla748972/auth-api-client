import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-blue-100 flex justify-center items-center">
      <div className="loader animate-spin transition-transform duration-1000 delay-300"></div>
    </div>
  );
};

export default Loader;
