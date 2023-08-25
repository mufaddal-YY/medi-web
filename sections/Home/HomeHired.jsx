"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";
import { HiArrowLongRight } from "react-icons/hi";
import { HiArrowLongLeft } from "react-icons/hi";
import ClientLogo from "@assets/images/clientLogo.png";
import SliderHired from "@assets/images/SliderHired1.png";
import SliderHired1 from "@assets/images/SliderHired2.png";
import SliderHired2 from "@assets/images/SliderHired3.png";
import SliderHired3 from "@assets/images/SliderHired4.png";
import SliderHired4 from "@assets/images/SliderHired5.png";

import Image from "next/image";

const content = [
  {
    thumb: SliderHired,
    title: "Dr.Suresh Babu",
    tags: "Uvea (SALEM) THE EYE FOUNDATION",
  },
  {
    thumb: SliderHired1,
    title: "Dr.Karan Magdum",
    tags: "The Eye Foundation, Madurai",
  },
  {
    thumb: SliderHired2,
    title: "Dr. Vikrant Bhagat",
    tags: "Saideep Hospital, Ahmednagar",
  },
  {
    thumb: SliderHired3,
    title: "Dr. Prasad Tanawade",
    tags: "APPLE SARASWATHI multispeciality hospital, Kolhapur",
  },
  {
    thumb: SliderHired4,
    title: "Dr. Akshay Kharat",
    tags: "Digras, Yevatmal",
  },
  {
    thumb: SliderHired,
    title: "Dr.Suresh Babu",
    tags: "Uvea (SALEM) THE EYE FOUNDATION",
  },
  {
    thumb: SliderHired1,
    title: "Dr.Karan Magdum",
    tags: "The Eye Foundation, Madurai",
  },
  {
    thumb: SliderHired2,
    title: "Dr. Vikrant Bhagat",
    tags: "Saideep Hospital, Ahmednagar",
  },
  {
    thumb: SliderHired3,
    title: "Dr. Prasad Tanawade",
    tags: "APPLE SARASWATHI multispeciality hospital, Kolhapur",
  },
  {
    thumb: SliderHired4,
    title: "Dr. Akshay Kharat",
    tags: "Digras, Yevatmal",
  },
];

const HomeHired = () => {
  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 5,
    slideTransition: "ease-in-out", // Update the slideTransition property

    autoplay: true,
    autoplayTimeout: 500,
    autoplaySpeed: 2200,
    stagePadding: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  return (
    <>
      <div className="section-container m-t0 m-b50 bg-white">
        <div className="container">
          <div className="d-flex justify-content-between ">
            <div className="m-b0">
              <span className="text-red">Get Hired Now</span>
              <h3>Top hospitals are looking for you</h3>
            </div>
          </div>
          <hr />
        </div>
        <div className="container-fluid">
          <Slider
            ref={sliderRef}
            {...settings}
            className="portfolio-carousel p-b20 owl-btn-center-lr owl-btn-1">
            {content.map((item, id) => (
              <div className="slider-item">
                <div className="portfolio-box style-2 m-b0">
                  <div className="portfolio-media">
                    <Image src={item.thumb} alt="" />
                  </div>
                  <div className="portfolio-info">
                    <div className="client-logo">
                      <div className="d-flex ">
                        <div className="p-10">
                          <h6 className="m-b0">
                            <Link href={item.title}>
                              {" "}
                              <strong>{item.title}</strong>{" "}
                            </Link>
                          </h6>
                          <span className="text-red m-b10">
                            {" "}
                            <small className="fs12">{item.tags}</small>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeHired;
