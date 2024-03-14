import React from "react";

const Notice = () => {
  return (
    <div className="shadow-lg h-[64px] flex items-center">
      <div className="border-l-4 border-red-500 h-full rounded-l-lg"></div>
      <div className="flex-1 bg-gray-50 rounded-r-lg p-4">
        <h5>
          Bạn có
          <a className="text-red-500 underline" href="#">
            1 đơn hàng
          </a>
          chưa thanh toán
        </h5>
      </div>
    </div>
  );
};

export default Notice;
