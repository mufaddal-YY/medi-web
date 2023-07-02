"use client";

import Slider from "react-slick";
import Image from "next/image";
import Logo from "@assets/images/logo.png"


const content = [
  {
   thumb: Logo,
  },
  {
    thumb: Logo,
   },
   {
    thumb: Logo,
   },
   {
    thumb: Logo,
   },
   {
    thumb: Logo,
   },
   {
    thumb: Logo,
   },
   {
    thumb: Logo,
   },
   {
    thumb: Logo,
   },
   {
    thumb: Logo,
   },
 
];

const Clientele = () => {
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="section-container section-sp4">
        <div className="container">
          <div className="m-b0">
            <span className="text-red">Clientele</span>
            <h3>Connecting you with <span className="text-red"> top medical recruiters</span> </h3>
          </div>
        </div>
        <div className="container-fluid m-t20" >
          <Slider
            {...settings}
            className="testimonial-carousel style2 arrow-none ">
            {content.map((item) => (
              <div className="slider-item">
                <div className=" client-logo p-10">
                <Image width={200} height={20} src={item.thumb} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Clientele;
