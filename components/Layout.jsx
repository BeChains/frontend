import React from "react";
import Navbar from "./Navbar";


export const Layout = ({ children }) => {
  return (
    <div className="file bg-[url('/static/bg.jpeg')] bg-no-repeat bg-cover bg-center lg:max-h-screen lg:overflow-y-hidden">
      <Navbar />
      <h1 className="px-5 text-center mt-5 lg:mt-10 font-press-start text-xl lg:text-5xl text-white font-juanyy">
        BeChains
      </h1>
      <div className="text-white pt-5 w-full min-h-[calc(100vh-60px)] ">
        {children}
      </div>
    </div>
  );
};
