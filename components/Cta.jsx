import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Cta = () => {
  return (
    <>
      <div className="section-container section-sp4 ">
        <div className="container ctaBg " style={{ borderRadius: "25px" }}>
          <div className="p-t80 p-b80 ">
            <h3 className="text-white text-center">
              Let's embark on this transformative journey together.
            </h3>
            <p className="text-white text-center"> 
              Contact us today to discuss your healthcare staffing needs or <br />
              explore exciting career opportunities.
            </p>
            <div className="text-center">
              <Link href={"/"} className="btn-secondary button-md radius-md">
                Explore <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
