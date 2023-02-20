import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProgressProps {
  totalQ: number;
  currentQ: number;
}

const Progress = ({ totalQ = 10, currentQ = 1 }: ProgressProps) => {
  return (
    <div className="flex justify-center items-center h-4 my-3 w-screen">
      <p className="mr-3">
        Q {currentQ}/{totalQ}
      </p>
      <div className="w-3/5 h-4 min-w-[320px]">
        <div className="absolute rounded-md w-3/5 min-w-[320px] mt-1.5 h-1 bg-gray-300"></div>
        <div
          className="absolute shadow-md border border-gray-200 rounded-md h-4 bg-green-300"
          style={{ width: `calc(60%*${currentQ / totalQ})` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
