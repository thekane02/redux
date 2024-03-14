"use client";
import Header from "@/app/component/header/Header";
// import Title from "@/component/main/title/Title";
import Image from "next/image";
import Title from "./component/main/Title/Title";
import Content from "./component/main/content/Content";
import Footer from "./component/footer/Footer";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="h-full  mx-auto w-2/4 ">
        <Title></Title>
        <Content></Content>
        <Footer></Footer>
      </div>
    </div>
  );
}
