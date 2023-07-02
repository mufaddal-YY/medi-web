"use client";

import React from "react";
import BannerBg from "@assets/images/bannerBg.png";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import SliderHeroPills from "@components/Sliders/SliderHeroPills";
import SliderHeroReverse from "@components/Sliders/SliderHeroReverse";
import { useRouter } from "next/router";

const HomeHero = ({ searchJobs, onSearchJobs }) => {
  // const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  return (
    <>
      <div className=" section-area section-sp2 heroBg ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="home-bnr-title text-center m-b20 ">
                <h2 className=" m-b0 fw7">Trust us! We will</h2>
                <h2 className="m-b10 fw7">
                  write your <span className="text-red">success story</span>{" "}
                </h2>

                <p className="text-center">
                  1st ever healthcare placement consultancy directed by a
                  consultant Doctor.
                </p>
              </div>
            </div>
            <div className="col-md"></div>
            <div className="col-lg-8 ">
              <div className="search-bx style-2">
                <form role="search">
                  <div className="input-group">
                    <input
                      name="text"
                      className="form-control"
                      placeholder="Search Healthcare jobs..."
                      type="text"
                     
                    />

                    <span className="input-group-btn">
                      <button
                        type="submit"
                        className="btn"
                        style={{ color: "#fff", backgroundColor: "#d60006" }}>
                        Search
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg"></div>
          </div>
        </div>
        <div className="m-b0 m-t50">
          <SliderHeroPills />
          <SliderHeroReverse />
        </div>
      </div>
    </>
  );
};

export default HomeHero;
