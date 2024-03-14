"use client";
import React, { useState } from "react";

const NavCategory = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="block mt-4">
      <div className="flex">
        <button
          className={`px-4 py-2 ${
            activeIndex === 0
              ? "bg-white text-gray-400"
              : "bg-gray-200 text-gray-900"
          } rounded-l border-r border-gray-400 focus:outline-none`}
          onClick={() => handleClick(0)}
        >
          Ăn nhẹ
        </button>
        <button
          className={`px-4 py-2 ${
            activeIndex === 1
              ? "bg-white text-gray-400"
              : "bg-gray-200 text-gray-900"
          } border-r border-gray-400 focus:outline-none`}
          onClick={() => handleClick(1)}
        >
          Ăn vặt
        </button>
        <button
          className={`px-4 py-2 ${
            activeIndex === 2
              ? "bg-white text-gray-400"
              : "bg-gray-200 text-gray-900"
          } border-r border-gray-400 focus:outline-none`}
          onClick={() => handleClick(2)}
        >
          Đồ uống
        </button>
        <button
          className={`px-4 py-2 ${
            activeIndex === 3
              ? "bg-white text-gray-400"
              : "bg-gray-200 text-gray-900"
          } rounded-r border-r border-gray-400 focus:outline-none`}
          onClick={() => handleClick(3)}
        >
          Sữa, cafe
        </button>
      </div>
    </div>
  );
};

export default NavCategory;
