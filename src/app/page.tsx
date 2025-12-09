"use client";
import Comment from "@/component/commen/landing/Comment";
import Slider from "@/component/commen/landing/slider";
import Category from "@/component/commen/landing/category";
import About from "@/component/commen/landing/about";
import Herosection from "@/component/commen/landing/Herosection";

const ClientLayout = () => {
  return (
    <>
      <Herosection />
      <Category />

      <Slider />

      <About />

      <Comment />
    </>
  );
};

export default ClientLayout;
