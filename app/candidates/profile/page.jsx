"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CustomAvatar } from "@components/custom-avatar";
import LoginPage from "@components/Auth/LoginPage";
import { Divider, Tab, Typography, Box, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";
import Label from "@components/label/Label";


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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyProfile = () => {

  const { data: session } = useSession();
const [candidates, setCandidates] = useState(null);
const [jobs, setJobs] = useState([]);
const [jobApplications, setJobApplications] = useState([]);

useEffect(() => {
    const fetchCandidates = async () => {
      try {
        if (!session) return; // Skip API call if session is not available

        const response = await fetch(
          `https://medi-web.vercel.app/api/users/${session.user.id}/candidates`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch candidates");
        }
        const data = await response.json();
        console.log(data);

        if (data.length > 0) {
          setCandidates(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://medi-server.onrender.com/api/v1/jobs`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        console.log(data);

        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchJobApplications = async () => {
      try {
        if (!session) return; // Skip API call if session is not available

        const response = await fetch(
          `https://medi-web.vercel.app/api/jobApplications/apply`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch job applications");
        }
        const data = await response.json();
        console.log(data);

        setJobApplications(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCandidates();
    fetchJobs();
    fetchJobApplications();
  }, [session]);

const filteredJobs = jobs.filter((job) =>
  jobApplications.some(
    (application) =>
      application.jobId === job._id && application.userId === session?.user.id
  )
);

console.log(filteredJobs);



  
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

  const handleEdit = () => {};

  const handleDelete = () => {};

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (session) {
    return (
      <>
        <section className="section-sp4 bg-blue-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <div className="feature-bx1 p-20 shadow bg-white ">
                  <div className="d-flex justify-content-center m-b20">
                    <CustomAvatar
                      style={{ height: "70px", width: "70px" }}
                      src={session?.user?.image}
                      alt={session?.user?.name}
                      name={session?.user?.name}
                    />
                  </div>

                  <div className="m-b20 text-center">
                    <h5 className="m-b0">{session?.user?.name}</h5>
                    <p>{session?.user.email}</p>
                  </div>

                  <hr />

                  <h5 className="m-b20">Contact Info</h5>
                  {candidates && (
                    <div>
                      <p className="m-b0">Phone</p>
                      <h6>{candidates.phoneNumber}</h6>
                    </div>
                  )}

                  {candidates && (
                    <div>
                      <p className="m-b0">Date of Birth</p>
                      <h6>{new Date(candidates.dob).toLocaleDateString()}</h6>
                    </div>
                  )}

                  {candidates && (
                    <div>
                      <p className="m-b0">Gender</p>
                      <h6>{candidates.gender}</h6>
                    </div>
                  )}

                  {candidates && (
                    <div>
                      <p className="m-b0">Address</p>
                      <h6>{candidates.address}</h6>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-9 col-sm-12">
                <div className="feature-bx1 shadow bg-white ">
                  <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example">
                        <Tab label="Overview" {...a11yProps(0)} />
                        <Tab label="Applied Jobs" {...a11yProps(1)} />
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                      <div className="m-b10" style={{ overflow: "hidden" }}>
                        {candidates && (
                          <div>
                            <h5 className="m-b0">About</h5>
                            <p>{candidates.bio}</p>
                          </div>
                        )}
                      </div>
                      <hr />
                      <div className="m-b10" style={{ overflow: "hidden" }}>
                        {candidates && (
                          <div>
                            <h5 className="m-b20">Work Experience</h5>
                            {candidates.experiences.map((experience, index) => (
                              <div key={index}>
                                <h5 className="m-b5">{experience.jobTitle}</h5>
                                <p className="m-b0">{experience.companyName}</p>
                                <div className="d-flex justify-content-start">
                                  <p>
                                    {new Date(
                                      experience.startDate
                                    ).toLocaleDateString()}{" "}
                                    -{" "}
                                    {new Date(
                                      experience.endDate
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="m-b10">
                        {candidates && (
                          <div>
                            <h5 className="m-b20">Education</h5>
                            {candidates.qualifications.map(
                              (qualification, index) => (
                                <div key={index}>
                                  <h5 className="m-b5">
                                    {qualification.degree}
                                  </h5>
                                  <p className="m-b0">
                                    {qualification.completingYear}
                                  </p>
                                  <p className="m-b0">
                                    {qualification.institute}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      {filteredJobs.map((item) => (
                        <div className="feature-bx1 m-b20 p-20" key={item._id}>
                          <div className="row">
                            <div className="col-md">
                              <Link href={`/jobs/${item.job}`}>
                                <h5 className="m-b20 m-t5">{item.job}</h5>
                              </Link>
                              <h6 style={{ color: "gray" }}>
                                50+ Candidates Applied
                              </h6>
                              <div className="hidden-desk">
                                <hr />
                              </div>
                            </div>

                            <div className="col-md-6 m-b20">
                              <div className="row ">
                                <div className="col-md">
                                  <div className="d-flex flex-column m-b10">
                                    <h6 className="align-items-center">
                                      {" "}
                                      Experience:
                                    </h6>
                                    <span className="">{item.experience}</span>
                                  </div>
                                </div>
                                <div className="col-md">
                                  <div className="d-flex flex-column m-b10">
                                    <h6 className="align-items-center">
                                      Qualification:
                                    </h6>
                                    <span className="">
                                      {item.qualification}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md">
                                  <div className="d-flex flex-column m-b10">
                                    <h6 className="align-items-center">
                                      Language:
                                    </h6>
                                    <span className="text-uppercase">
                                      {item.lang}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md">
                                  <div className="d-flex flex-column m-b10">
                                    <h6 className="align-items-center">
                                      Status
                                    </h6>
                                    <div>
                                      <Label
                                        variant="soft"
                                        color={
                                          (item.status === "Inactive" &&
                                            "error") ||
                                          "success"
                                        }
                                        sx={{ ml: 0 }}>
                                        {item.status}
                                      </Label>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-3 col-sm-12">
                              <div className=" justify-content-start">
                                <Link
                                  href={`/jobs/${item.job}`}
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
                    </TabPanel>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <LoginPage />
    </>
  );
};

export default MyProfile;
