import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="shadow-xl h-[64px] flex items-center w-full justify-between  mt-10 mb-5 ">
      <div className="flex ">
        <div className="mr-5 ml-5 text-red-600 border border-red-500 p-2 hover:bg-red-500 hover:text-white cursor-pointer">
          Xóa hết
        </div>
        <FaShoppingCart className="items-end"></FaShoppingCart>
      </div>
      <div className="flex gap-4 ">
        <p>0</p>
        <Link href="/">
          <p>Tạo đơn hàng</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
