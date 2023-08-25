import Image from "next/image";
import Process1 from "@assets/images/process1.png";
import Process2 from "@assets/images/process2.png";
import Process3 from "@assets/images/process3.png";
import Process4 from "@assets/images/process4.png";
import Process5 from "@assets/images/process5.png";

const Content = [
  {
    thumb: Process1,
    title: "Agreement",
    description:
      "Once in a Lifetime agreement with the the Client",
  },
  {
    thumb: Process2,
    title: "Job Description",
    description:
      "Questionnaire filling by Client for the exact JD (Job description)",
  },
  {
    thumb: Process3,
    title: "Candidate Research",
    description:
      "Screening & Scrutinising our database for the complementing candidate.",
  },
  {
    thumb: Process4,
    title: "Final Approval",
    description:
      "Shortlisted resumes are forwarded to the Client for their interviewing processes.",
  },
  {
    thumb: Process5,
    title: "Hiring",
    description:
      "Suitable Doctor's are hired by the organization with the help of MediRecruiters",
  },
];

const HomeHowWeWork = () => {
  return (
    <>
      <div className="section-container section-sp4">
        <div className="container">
          <h6 className="text-red">How we work?</h6>
          <h3 className="mt">
            Easy to use, <span className="text-red"> Easy to apply</span>
          </h3>
          <div className="row">
            {Content.map((item) => (
              <div className="col-lg col-sm-12">
                <div className="p-10">
                  <Image
                    className="m-b10"
                    src={item.thumb}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                  <h6>{item.title}</h6>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHowWeWork;
