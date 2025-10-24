import React from "react";
import { FourSquare } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <FourSquare color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
    </div>
  );
};

export default Loading;
