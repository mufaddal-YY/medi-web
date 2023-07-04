import Founder from "@assets/images/founder.png";
import Image from "next/image";

const Star = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="43"
    viewBox="0 0 15 43">
    <text
      id="Your_job_as_a_UX_Des"
      data-name="Your job as a UX Des"
      fill="#d60006"
      font-size="30"
      font-family="Poppins-Regular, Poppins">
      <tspan x="0" y="32">
        *
      </tspan>
    </text>
  </svg>
);

const AboutFounder = () => {
  return (
    <>
      <div className="section-container section-sp2 heroBg">
        <div className="container">
          <div className="m-b30">
            <span className="text-red">Medirecruiters</span>
            <h3>Meet our Founder</h3>
          </div>
          <hr />
          <div className="row m-t20">
            <div className="col-lg-4 text-center">
              <Image src={Founder} width={400} />
            </div>
            
            <div className="col-lg-7 m-l20">
              <h3 className="m-t20">
                Dr. Shilpa <span className="text-red">Totala</span>{" "}
              </h3>
              <p>
                <small className="text-dark fw6">
                  MBBS, Diploma - Diploma in Pathology & Bacteriology <br />
                  Pathologist | 24 Years Experience Overall (19 years as
                  specialist)
                </small>
              </p>
              <p className="m-b20">
                Dr. Shilpa Totla is a pathologist with a remarkable career
                spanning over two decades. Since embarking on her journey in
                2000, Dr. Totla has been committed to providing patients and
                doctors with the best possible experience. She believes that
                constant academic and technical upgradation is essential to
                achieving the core value of extraordinary service and quality.
              </p>
              <span>{Star}</span> Core value of authenticity <br />
              <span>{Star}</span> State-of-the-art pathology laboratory with
              in-house investigations <br />
              <span>{Star}</span> Largely recognized and sought for path lab
              during the Corona pandemic <br />
              <span>{Star}</span> Conducted Covid- RAT, RTPCR, Covid packages,
              Post Covid packages, etc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFounder;
