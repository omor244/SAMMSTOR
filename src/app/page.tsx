import Categories from "@/Components/Home/Categories";
import FlashSale from "@/Components/Home/FlashSale";
import Hero from "@/Components/Home/Hero";
import Newsletter from "@/Components/Home/Newsletter";

import TrendingSection from "@/Components/Home/TrendingSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Categories></Categories>
      <FlashSale></FlashSale>
      <TrendingSection></TrendingSection>
      <Newsletter></Newsletter> 
    </>
  );
}
