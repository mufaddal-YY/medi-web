"use client";

import { useEffect, useState } from "react";
import Label from "@components/label/Label";
import Jobs from "@components/Jobs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import withRouter
import LoginPage from "@components/Auth/LoginPage";
import { Button } from "@mui/material";

const JobDetails = ({ params }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [job, setJob] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const [jobResponse, candidatesResponse] = await Promise.all([
          fetch(`https://medi-server.onrender.com/api/v1/jobs/${params._id}`),
          fetch("https://medi-server.onrender.com/api/v1/candidates"),
        ]);
  
        const jobData = await jobResponse.json();
        const candidatesData = await candidatesResponse.json();
  
        setJob(jobData);
  
        const isCreator = candidatesData.some(
          (candidate) => candidate.creator === session?.user.id
        );
  
        if (!isCreator) {
          if (!session) {
            router.push("/auth/login"); // Redirect to the login page if user is not logged in
          } else {
            router.push("/candidates/resume"); // Redirect to the resume page if user is not the creator
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchJob();
  }, [params._id, session?.user.id, router]);
  

  // useEffect(() => {
  //   const fetchJob = async () => {
  //     try {
  //       const [jobResponse, candidatesResponse] = await Promise.all([
  //         fetch(`https://medi-server.onrender.com/api/v1/jobs/${params._id}`),
  //         fetch("https://medi-server.onrender.com/api/v1/candidates")
  //       ]);

  //       const jobData = await jobResponse.json();
  //       const candidatesData = await candidatesResponse.json();

  //       setJob(jobData);

  //       const isCreator = candidatesData.some(
  //         (candidate) => candidate.creator === session?.user.id
  //       );

  //       if (!isCreator) {
  //         router.push("/candidates/resume");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchJob();
  // }, [params._id, session?.user.id, router]);


//   useEffect(() => {
//   const fetchJob = async () => {
//     try {
//       const [jobResponse, candidatesResponse, applicationStatusResponse] = await Promise.all([
//         fetch(`https://medi-server.onrender.com/api/v1/jobs/${params._id}`),
//         fetch("https://medi-server.onrender.com/api/v1/candidates"),
//         fetch(`https://medi-web.vercel.app/api/jobApplication/apply?userId=${session?.user.id}&jobId=${params._id}`)
//       ]);

//       const jobData = await jobResponse.json();
//       const candidatesData = await candidatesResponse.json();
//       const applicationStatusData = await applicationStatusResponse.json();

//       setJob(jobData);

//       const isCreator = candidatesData.some(
//         (candidate) => candidate.creator === session?.user.id
//       );

//       if (!isCreator) {
//         router.push("/candidates/resume");
//       }

//       if (applicationStatusData.alreadyApplied) {
//         setApplicationStatus("alreadyApplied");
//         setIsApplied(true);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchJob();
// }, [params._id, session?.user.id, router]);


//   useEffect(() => {
//   const fetchApplicationStatus = async () => {
//     try {
//       const response = await fetch(
//         `https://medi-web.vercel.app/api/jobApplication/apply?userId=${session?.user.id}&jobId=${params._id}`
//       );
//       const data = await response.json();

//       if (data.alreadyApplied) {
//         setApplicationStatus("alreadyApplied");
//         setIsApplied(true);
//       }
//     } catch (error) {
//       console.error("Failed to fetch application status:", error);
//     }
//   };

//   if (session?.user.id && job?._id) {
//     fetchApplicationStatus();
//   }
// }, [session?.user.id, params._id, job, isApplied]);

  const handleApply = async (e) => {
  e.preventDefault();

  if (!session) {
    console.error("User is not logged in");
    return;
  }

  try {
    const response = await fetch(
      "https://medirecruiters.in/api/jobApplication/apply",
      {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          jobId: job._id,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.alreadyApplied) {
        setApplicationStatus("alreadyApplied");
      } else {
        setApplicationStatus("applied");
      }
      setIsApplied(true);
    } else {
      console.error("Failed to submit application");
    }
  } catch (error) {
    console.error("Failed to Apply", error);
  }
};

  if (!job) {
    return <div>Loading...</div>;
  }

  const isJobInactive = job.status === "Inactive";

  if (session) {
    return (
      <>
        <section className="section-sp4 bg-blue-light">
          <div className="container">
            <div className="feature-bx1 bg-white">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="m-t10 m-b10">{job.jobTitle}</h5>
                  <Label
                    variant="soft"
                    color={isJobInactive ? "error" : "success"}>
                    {job.status}
                  </Label>
                </div>
                {!isJobInactive && (
                  <div className="m-t10">
                    {isApplied ? (
                      <Label variant="soft" color="success">
                        Application Submitted
                      </Label>
                    ) : (
                      <>
                        {applicationStatus === "alreadyApplied" && (
                          <Label variant="soft" color="success">
                            Already Applied
                          </Label>
                        )}
                        <div className="m-t10">
                          <Button
                            size="large"
                            onClick={handleApply}
                            disabled={
                              isApplied ||
                              applicationStatus === "alreadyApplied"
                            }
                            sx={{
                              bgcolor: "#d60006",
                              borderRadius: "8px",
                              px: "18px",
                              fontWeight: 600,
                              color: (theme) =>
                                theme.palette.mode === "light"
                                  ? "common.white"
                                  : "main",
                              "&:hover": {
                                bgcolor: "text.primary",
                                color: (theme) =>
                                  theme.palette.mode === "light"
                                    ? "common.white"
                                    : "main",
                              },
                            }}
                          >
                            {isApplied ||
                            applicationStatus === "alreadyApplied"
                              ? "Application Submitted"
                              : "Apply Now"}
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              <hr />
              <div className="row m-b20">
                <div className="col-md">
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center"> Experience:</h6>
                    <span className="">{job.experience}</span>
                  </div>
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center"> OPD:</h6>
                    <span className="">{job.opd}</span>
                  </div>
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center"> Accomodation:</h6>
                    <span className="text-uppercase">{job.accommodation}</span>
                  </div>
                </div>
                <div className="col-md">
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center"> Qualification:</h6>
                    <span className="">{job.qualification}</span>
                  </div>
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center">Salary:</h6>
                    <span className=" ">{job.salary}</span>
                  </div>
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center"> Language:</h6>
                    <span className="text-uppercase">{job.lang}</span>
                  </div>
                </div>
                <div className="col-md">
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center"> % Occupancy:</h6>
                    <span className="">{job.occupancy}</span>
                  </div>
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center"> Holidays:</h6>
                    <span className=" ">{job.holidays}</span>
                  </div>
                </div>
                <div className="col-md">
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center"> Equipments:</h6>
                    <span className="text-uppercase">{job.equipment}</span>
                  </div>
                  <div className="d-flex flex-column m-b20">
                    <h6 className="align-items-center"> Conference Leaves:</h6>
                    <span className="">{job.conference}</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="">
              <h5 className="m-t20 m-b20 m-l10">Other Relevant Jobs</h5>
              <Jobs />
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

export default JobDetails;
