import React from "react";
import Notice from "./notice/Notice";
import Title from "../Title/Title";
import Search from "./search/Search";
import NavCategory from "./category/nav/NavCategory";
import InfoBox from "./category/content/InfoBox";
import TabContent from "./category/content/TabContent";

const Content = () => {
  return (
    <div>
      <Notice></Notice>
      <Search></Search>
      <NavCategory></NavCategory>
      <TabContent></TabContent>
    </div>
  );
};

export default Content;
