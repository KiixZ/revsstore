import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../assets/data/data";
import PreviousBtn from "./PreviousBtn";
import NextBtn from "./NextBtn";
import Card from "./Card";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function cards(data) {
  return (
    <Card
      key={data.id}
      avatar={data.avatar}
      name={data.name}
      message={data.message}
      designation={data.designation}
      location={data.location}
    />
  );
}
function Testimonials(){
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextBtn icon={FiArrowRight} />,
    prevArrow: <PreviousBtn icon={FiArrowLeft} />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };
  return (
    <div className="testimonial" id='testimoni'>
      <div style={{ width: "80%" }}>
        <h1 className="heading">Testimoni Pelanggan</h1>
        <h2 className="child-heading">Apa kata mereka tentang REVS STORE ?</h2>
        <Slider {...settings}>{data.map(cards)}</Slider>
      </div>
    </div>
  );
}
export default Testimonials;