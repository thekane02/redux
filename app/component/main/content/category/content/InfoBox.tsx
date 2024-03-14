"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const InfoBox = ({ title, price, id }) => {
  // const [count, setCount] = useState(0);
  const [showminus, setShowMinus] = useState(false);
  const [count, setCount] = useState(0);
  const increaseCounts = () => {
    setCount(count + 1);
    if (count === 0) {
      setShowMinus(true);
    }
  };

  const decreaseCounts = () => {
    if (count > 0) {
      setCount(count - 1);

      if (count === 1) {
        setShowMinus(false);
      }
    }
  };
  return (
    <div>
      <div
        className="info-box shadow-xl h-[64px] flex  mt-5 mb-5  "
        data-id={id}
        data-price={price}
      >
        <div className="flex items-center">
          <Image
            className="mr-5"
            alt=""
            src="https://www.coindesk.id/images/logo.svg"
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="info-box-content block items-center w-full ml-4">
          <div>
            <span className="item-name ">{title}</span>
          </div>
          <div className="item-info flex ">
            <span className="item-price text-ml font-bold">
              {price}đ / hộp{" "}
            </span>
            <div className="ml-auto flex gap-5">
              {showminus && (
                <div
                  className=" bg-green-500 w-5 flex justify-center"
                  onClick={decreaseCounts}
                >
                  <button className="text-white">-</button>
                </div>
              )}
              {count > 0 && <p>{count}</p>}
              <div
                className=" bg-green-500 w-5 flex justify-center"
                onClick={increaseCounts}
              >
                <button className="text-white">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
