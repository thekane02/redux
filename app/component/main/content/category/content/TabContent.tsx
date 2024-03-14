import React from "react";
import InfoBox from "./InfoBox";
const mockData = [
  {
    id: 1,
    nameCategory: "ăn nhẹ",
    listItems: [
      {
        id: 1,
        name: "Mì Modern lẩu Thái tôm ly 65g",
        price: 9000,
        quatity: 0,
      },
      {
        id: 2,
        name: "Bánh mì Staff 3 nhân 90g",
        price: 9000,
        quatity: 1,
      },
      {
        id: 3,
        name: "Bánh mì ruốc Staff 60g",
        price: 9000,
        quatity: 1,
      },
    ],
  },
  {
    id: 2,
    nameCategory: "ăn vặt",
    listItems: [
      {
        id: 1,
        name: "Mì Modern lẩu Thái tôm ly 65g",
        price: 9000,
        quatity: 1,
      },
      {
        id: 2,
        name: "Bánh mì Staff 3 nhân 90g",
        price: 9000,
        quatity: 0,
      },
      {
        id: 3,
        name: "Bánh mì ruốc Staff 60g",
        price: 9000,
        quatity: 0,
      },
    ],
  },
  {
    id: 3,
    nameCategory: "đồ uống",
    listItems: [
      {
        id: 1,
        name: "Mì Modern lẩu Thái tôm ly 65g",
        price: 9000,
        quatity: 0,
      },
      {
        id: 2,
        name: "Bánh mì Staff 3 nhân 90g",
        price: 9000,
        quatity: 0,
      },
      {
        id: 3,
        name: "Bánh mì ruốc Staff 60g",
        price: 9000,
        quatity: 0,
      },
    ],
  },
  {
    id: 4,
    nameCategory: "đồ uống",
    listItems: [
      {
        id: 1,
        name: "Mì Modern lẩu Thái tôm ly 65g",
        price: 9000,
        quatity: 0,
      },
      {
        id: 2,
        name: "Bánh mì Staff 3 nhân 90g",
        price: 9000,
        quatity: 0,
      },
      {
        id: 3,
        name: "Bánh mì ruốc Staff 60g",
        price: 9000,
        quatity: 0,
      },
    ],
  },
];
const titles = [
  "Mì Modern lẩu Thái tôm ly 65g",
  "Bánh mì Staff 3 nhân 90g",
  "Bánh mì ruốc Staff 60g",
  "Xúc xích tiệt trùng CP 200g",
  "Mì ly Hảo Hảo Handy tôm chua cay, tôm yum 67g",
  "Xúc xích tiệt trùng CP 40g",
  "Xúc xích tiệt trùng CP 40g",
];
const prices = [9000, 10000, 15000, 22222, 123112312, 2313123, 321312];
const TabContent = () => {
  return (
    <div className="">
      {titles.map((title, index) => (
        <InfoBox key={index} title={title} price={prices[index]}></InfoBox>
      ))}
    </div>
  );
};

export default TabContent;
