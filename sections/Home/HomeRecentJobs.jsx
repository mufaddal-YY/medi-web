"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import SliderHired from "@assets/images/SliderHired1.png";
import ClientLogo from "@assets/images/clientLogo.png";
import { BiRupee } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const content = [
  {
    thumb: SliderHired,
    title: "Lorem Ipsum Dolor",
    tags: ["Full Time", "Min 1 Year", "Pune"],
  },
  {
    thumb: SliderHired,
    title: "Lorem Ipsum Dolor",
    tags: ["Full Time", "Min 1 Year", "Pune"],
  },
  {
    thumb: SliderHired,
    title: "Lorem Ipsum Dolor",
    tags: ["Full Time", "Min 1 Year", "Pune"],
  },
  {
    thumb: SliderHired,
    title: "Lorem Ipsum Dolor",
    tags: ["Full Time", "Min 1 Year", "Pune"],
  },
  {
    thumb: SliderHired,
    title: "Lorem Ipsum Dolor",
    tags: ["Full Time", "Min 1 Year", "Pune"],
  },
  {
    thumb: SliderHired,
    title: "Lorem Ipsum Dolor",
    tags: ["Full Time", "Min 1 Year", "Pune"],
  },
];

const HomeRecentJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("https://medi-server.onrender.com/api/v1/jobs");
      const data = await response.json();

      setJobs(data);
    };
    fetchJobs();
  }, []);

  
  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 4,
    slideTransition: "linear",
    autoplay: true,
    autoplayTimeout: 500,
    autoplaySpeed: 3200,
    stagePadding: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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

  return (
    <>
      <div className="section-container section-sp2 bg-white heroBg">
        <div className="container">
          <div className="d-flex justify-content-between ">
            <div className="m-b0">
              <span className="text-red">Featured</span>
              <h3>Recently Listed Jobs</h3>
            </div>
            <div>
              <Link href={"/jobs"} className="btn-primary button-md radius-md m-t20" >View All <BsArrowRight /></Link>
            </div>
          </div>
          <hr />
        </div>
        <div className="container-fluid">
          <Slider {...settings} className="arrow-none">
            {jobs.map((item, id) => (
              <div className="slider-item">
                <div className="feature-bx1 bg-white">
                  <div className="d-flex">
                    <div m-l0>
                      <Image width={80} height={20} src={ClientLogo} alt="" />
                    </div>

                    <div>
                      <h6 className="m-t10 m-b0">
                        <Link href={item._id}>{item.jobTitle}</Link>
                      </h6>
                      
                    </div>
                  </div>
                  <h5 className="m-t10 fw5">{item.jobTitle}</h5>
                  <div className="d-flex justify-content-start">
                    <div className="widget widget_tag_cloud">
                    <div className="tagcloud ">
                      
                        <Link href="#">{item.lang} </Link>
                     
                    </div>
                  </div>
                    <div className="widget widget_tag_cloud">
                    <div className="tagcloud ">
                      
                        <Link href="#">{item.status} </Link>
                     
                    </div>
                  </div>
                    <div className="widget widget_tag_cloud">
                    <div className="tagcloud ">
                      
                        <Link href="#">{item.qualification} </Link>
                     
                    </div>
                  </div>
                  </div>
                  
                  <p className="m-t10">
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                  </p>

                  <div className="d-flex justify-content-start">
                    <div className="d-flex">
                      <p className="fw4"><span className="text-blue fs18"><BiRupee /></span> {item.salary}</p>
                    </div>
                    <div className="d-flex m-l20">
                      <p className="fw4"> <span className="text-blue fs18"><BiTime /></span> {item.experience}</p>
                    </div>

                  </div>
                  <hr />
                  <div className="d-flex m-b10 ">
                    <Link href={`/jobs/${item._id}`} className="btn-primary button-md radius-md">Apply Now</Link>
                    <Link href={`/jobs/${item._id}`} className="btn-soft m-l10 button-md radius-md">View Job</Link>

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

export default HomeRecentJobs;
