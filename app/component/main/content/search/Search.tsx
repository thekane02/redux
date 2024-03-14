import React from "react";

const Search = () => {
  return (
    <div className="mt-5 h-[38px] flex text-center">
      <input
        className="ml-2 border border-gray-200 rounded-md w-full focus:border-blue-300 transition-all focus:outline-none focus:ring-1 focus:ring-blue-600"
        type="text"
        placeholder="Tìm kiếm item"
      />
    </div>
  );
};

export default Search;
