"use client";

import Slider from "react-slick";
import Image from "next/image";
import Logo from "@assets/images/Artboard 1.png"
import Logo2 from "@assets/images/Artboard 2.png"
import Logo3 from "@assets/images/Artboard 3.png"
import Logo4 from "@assets/images/Artboard 4.png"
import Logo5 from "@assets/images/Artboard 5.png"
import Logo6 from "@assets/images/Artboard 6.png"
import Logo7 from "@assets/images/Artboard 7.png"
import Logo8 from "@assets/images/Artboard 8.png"
import Logo9 from "@assets/images/Artboard 9.png"
import Logo10 from "@assets/images/Artboard 10.png"
import Logo11 from "@assets/images/Artboard 11.png"
import Logo12 from "@assets/images/Artboard 12.png"
import Logo13 from "@assets/images/Artboard 13.png"
import Logo14 from "@assets/images/Artboard 14.png"
import Logo15 from "@assets/images/Artboard 15.png"
import Logo16 from "@assets/images/Artboard 16.png"


const content = [
  {
   thumb: Logo,
  },
  {
    thumb: Logo2,
   },
   {
    thumb: Logo3,
   },
   {
    thumb: Logo4,
   },
   {
    thumb: Logo5,
   },
   {
    thumb: Logo6,
   },
   {
    thumb: Logo7,
   },
   {
    thumb: Logo8,
   },
   {
    thumb: Logo9,
   },
   {
    thumb: Logo10,
   },
   {
    thumb: Logo11,
   },
   {
    thumb: Logo12,
   },
   {
    thumb: Logo13,
   },
   {
    thumb: Logo14,
   },
   {
    thumb: Logo15,
   },
   {
    thumb: Logo16,
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
