import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Cta = () => {
  return (
    <>
      <div className="section-container section-sp4 ">
        <div className="container ctaBg " style={{ borderRadius: "25px" }}>
          <div className="p-t80 p-b80 ">
            <h3 className="text-white d-flex justify-content-center">
              Browse our 1000+ latest Jobs
            </h3>
            <p className="text-white text-center d-flex justify-content-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br />
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
            <div className="d-flex justify-content-center">
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
