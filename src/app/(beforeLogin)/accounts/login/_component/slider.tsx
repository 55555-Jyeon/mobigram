"use client";

import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import iphone from "../../../../../../public/main-slider/phone.png";
import { SlideData } from "../../_consts/slide";
import style from "./slider.module.css";

interface SlideItem {
  label: string;
  alt: string;
  url: string;
}

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  function handleChange(index: number) {
    setCurrentIndex(index);
  }
  const renderSlides = SlideData.map((image: SlideItem, idx: number) => (
    <Image key={idx + 1} src={image.url} alt={image.alt} />
  ));

  return (
    <div className={style.container}>
      <div className={style.slide}>
        <Carousel
          showArrows={false}
          autoPlay={true}
          /* autoPlaySpeed={2000} */
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          selectedItem={currentIndex}
          onChange={handleChange}
        >
          {renderSlides}
        </Carousel>
      </div>
      <Image className={style.mobileImg} src={iphone} alt={"iphone image"} />
    </div>
  );
}
