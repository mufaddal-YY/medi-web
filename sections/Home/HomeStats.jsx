import { BsArrowRight } from "react-icons/bs";
import Counter from "./../../components/Counter";
import Link from "next/link";
import Image from "next/image";
import JobScreen from "@assets/images/jobsScreen.png";
const HomeStats = () => {
  return (
    <>
      <div className="section-container section-sp2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-2 order-md-2 m-t20">
              <h6 className="text-red">Get hired now</h6>
              <h3 className="mt">
                Search and apply for the    <span className="text-red"> job you want.</span>
              </h3>
              <hr />
              <p>
                MediRecruiters is a healthcare placement consultancy in India,
                with an exclusive database of over 4 lakh doctors and healthcare
                professionals. We help talented doctors advance their careers in
                India and support hospitals by providing the best teams quickly.
              </p>
              <ul>
                <li>
                  Connect with top healthcare employers across the Nation.
                </li>
                <li>
                  Search for job opportunities by location, specialty, and
                  experience level.
                </li>
                <li>
                  Create a professional profile to showcase your skills and
                  experience.
                </li>
                <li>Get access to helpful career resources and tips.</li>
                <li>
                  Enjoy a user-friendly platform designed specifically for
                  healthcare professionals.
                </li>
              </ul>

              <div className="d-flex justify-content-between row m-t20 m-20">
                <div className="counter-style-1 col-6 col-md-3 text-center">
                  <div className="text-red">
                    <Counter counter={200} />
                    <span>+</span>
                  </div>
                  <span className="counter-text">Users</span>
                </div>
                <div className="counter-style-1 col-6 col-md-3 text-center ">
                  <div className="text-red">
                    <Counter counter={500} />
                    <span>k+</span>
                  </div>
                  <span className="counter-text">Vacancies</span>
                </div>
                <div className="counter-style-1 col-6 col-md-3 text-center">
                  <div className="text-red">
                    <Counter counter={10} />
                    <span>+</span>
                  </div>
                  <span className="counter-text">Placed</span>
                </div>
                <div className="counter-style-1 col-6 col-md-3 text-center ">
                  <div className="text-red">
                    <Counter counter={20} />
                    <span>+</span>
                  </div>
                  <span className="counter-text">Companies</span>
                </div>
              </div>
{/*               <Link
                href={"/"}
                className="btn-primary button-md radius-md m-b30">
                View Jobs <BsArrowRight />
              </Link> */}
            </div>
            <div className="col-lg-6 text-center">
              <div className="">
                <Image
                className=""
                  src={JobScreen}
                  alt="Job Screen"
                  width={600}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStats;
