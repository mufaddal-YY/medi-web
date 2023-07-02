import Image from "next/image";
import AboutHeroImage from "@assets/images/AboutHero.png";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const AboutHero = () => {
  return (
    <>
    <div className="section-container section-sp4">
      <div className="container">
        <div className="row">
        <div className="col-lg-6 text-center ">
            <div className="">
              <Image
                className=""
                src={AboutHeroImage}
                alt="Job Screen"
                width={700}
                height={50}
              />
            </div>
          </div>
          <div className="col-lg-6 m-t20 align-items-center justify-content-center">
            <div className="p-10 m-t50 ">
              <h3>
              1st ever
              <span className="text-red"> Healthcare Placement Consultancy</span>{" "}
              directed by a consultant Doctor.
            </h3>

            <p>
              MediRecruiters is a Healthcare Placement Consultancy, with an
              exclusive database of over 4 lakh Doctors and Healthcare
              Professionals of India. 
            </p>

            <Link href={"/jobs"} className="btn-secondary button-md radius-md" >View Jobs <BsArrowRight /></Link>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
    </>
    
  );
};

export default AboutHero;
