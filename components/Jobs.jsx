"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Label from "@components/label/Label";
import Button from "@mui/material/Button";

const Rupee = (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} viewBox="0 0 10.88 18.12">
    <path
      id="You_will_be_responsi"
      data-name="You will be responsi"
      d="M9.48,10.24v.28H11.8v1.64H9.36a4.681,4.681,0,0,1-.83,2.13A3.387,3.387,0,0,1,6.8,15.43a9.946,9.946,0,0,1-2.9.35v1.26a2.882,2.882,0,0,0,.47,1.74,1.843,1.843,0,0,0,1.59.64Q8,19.42,8,17.12h2.1a4.1,4.1,0,0,1-1.09,3.05A4.282,4.282,0,0,1,5.92,21.2a4.074,4.074,0,0,1-3.09-1.12,4.363,4.363,0,0,1-1.07-3.14V14.2a29.134,29.134,0,0,0,3.26-.13,3.015,3.015,0,0,0,1.55-.55,2.161,2.161,0,0,0,.67-1.36H.92V10.52H7.34V8.74H.92V7.08H11.8V8.74H9.48Z"
      transform="translate(-0.92 -7.08)"
      fill="#5157f3"
    />
  </svg>
);

const Clock = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    viewBox="0 0 15.136 18.136">
    <path
      id="Icon_material-access-time"
      data-name="Icon material-access-time"
      d="M10.561,3a7.568,7.568,0,1,0,7.576,7.568A7.564,7.564,0,0,0,10.561,3Zm.008,13.623a6.054,6.054,0,1,1,6.055-6.054A6.053,6.053,0,0,1,10.568,16.623Zm.378-9.839H9.811v4.541l3.973,2.384.568-.931-3.406-2.021Z"
      transform="translate(-3 -3)"
      fill="#5157f3"
    />
  </svg>
);

const Share = (
  <svg
    id="Share"
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    viewBox="0 0 14.785 14.785">
    <circle id="Oval" cx="7.392" cy="7.392" r="7.392" fill="none" />
    <g
      id="Group_24_Copy"
      data-name="Group 24 Copy"
      transform="translate(0.616 0.616)">
      <path
        id="Combined_Shape"
        data-name="Combined Shape"
        d="M13.553,11.089A2.463,2.463,0,0,0,9.055,9.7L4.8,7.551a2.466,2.466,0,0,0-.018-1.6L9.061,3.863a2.463,2.463,0,1,0-.437-1.4q0,.119.011.235L4.082,4.919a2.464,2.464,0,1,0,.047,3.672l4.506,2.275q-.01.11-.01.223a2.464,2.464,0,0,0,4.928,0Zm-1.232,0a1.232,1.232,0,1,1-1.232-1.232A1.234,1.234,0,0,1,12.32,11.089ZM3.7,6.776A1.232,1.232,0,1,1,2.464,5.544,1.233,1.233,0,0,1,3.7,6.776ZM12.32,2.464a1.232,1.232,0,1,1-1.232-1.232A1.234,1.234,0,0,1,12.32,2.464Z"
        fill="#3b3b3b"
      />
    </g>
  </svg>
);

const Exp = (
  <svg
    id="Group_25"
    data-name="Group 25"
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    viewBox="0 0 17.6 18.2">
    <path
      id="Combined_Shape"
      data-name="Combined Shape"
      d="M2.4,15.2A2.4,2.4,0,0,1,0,12.8v-8A2.4,2.4,0,0,1,2.4,2.4H4.8A2.4,2.4,0,0,1,7.2,0h3.2a2.4,2.4,0,0,1,2.4,2.4h2.4a2.4,2.4,0,0,1,2.4,2.4v8a2.4,2.4,0,0,1-2.4,2.4Zm12.8-1.6a.8.8,0,0,0,.8-.8v-8a.8.8,0,0,0-.8-.8h-.4v9.6Zm-2,0V4H4.4v9.6ZM1.6,4.8v8a.8.8,0,0,0,.8.8h.4V4H2.4A.8.8,0,0,0,1.6,4.8Zm9.6-2.4a.8.8,0,0,0-.8-.8H7.2a.8.8,0,0,0-.8.8Z"
      fill="#574cf9"
    />
  </svg>
);

const handleShare = () => {
  const url = window.location.href;
  if (navigator.share) {
    navigator
      .share({
        title: document.title,
        text: "Check out this page!",
        url: url,
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing:", error));
  } else {
    window.prompt("Copy this URL:", url);
  }
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("http://localhost:8080/api/v1/jobs");
      const data = await response.json();

      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <>
      {jobs.map((item) => (
        <div className="feature-bx1 m-b20 p-20" key={item._id}>
          <div className="row">
            <div className="col-lg">
              <Link href={`/jobs/${item._id}`}>
                <h5 className="m-b20 m-t5">{item.jobTitle}</h5>
              </Link>
              <h6 style={{ color: "gray" }}>50+ Candidates Applied</h6>
              <div className="hidden-desk">
                <hr />
              </div>
            </div>

            <div className="col-lg-6 m-b20">
              <div className="row ">
                <div className="col-lg">
                  <div className="d-flex flex-column m-b10">
                    <h6 className="align-items-center"> Experience:</h6>
                    <span className="">{item.experience}</span>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="d-flex flex-column m-b10">
                    <h6 className="align-items-center">Qualification:</h6>
                    <span className="">{item.qualification}</span>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="d-flex flex-column m-b10">
                    <h6 className="align-items-center">Language:</h6>
                    <span className="text-uppercase">{item.lang}</span>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="d-flex flex-column m-b10">
                    <h6 className="align-items-center">Status</h6>
                    <div>
                      <Label
                        variant="soft"
                        color={
                          (item.status === "Inactive" && "error") || "success"
                        }
                        sx={{ ml: 0 }}>
                        {item.status}
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12">
              <div className=" justify-content-start">
                <Link
                  href={`/jobs/${item._id}`}
                  className="btn-secondary button-md radius-md m-b10 m-r10">
                  View Job
                </Link>

                <a
                  onClick={handleShare}
                  className="btn-soft  button-md radius-md m-b10">
                  Share {Share}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Jobs;
