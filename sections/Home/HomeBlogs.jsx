import Image from "next/image";
import Process1 from "@assets/images/blog1.png";
import Process2 from "@assets/images/blog2.png";
import Process3 from "@assets/images/blog4.png";
import Process4 from "@assets/images/blog3.png";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Content = [
  {
    thumb: Process1,
    title: "Exploring the Lucrative Medical Job Market in India",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    thumb: Process2,
    title: "Top In-Demand Medical Jobs in India",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    thumb: Process3,
    title: "Career Paths in the Indian Healthcare Industry",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    thumb: Process4,
    title: "Navigating the Challenges and Rewards of Medical Jobs in India",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
];

const HomeBlogs = () => {
  return (
    <>
      <div className="section-container section-sp4">
        <div className="container">
          <div className="d-flex justify-content-between ">
            <div className="m-b0">
              <span className="text-red">Learn</span>
              <h3 className="mt">
                Blogs and
                <span className="text-red"> News</span>
              </h3>
            </div>
            <div>
              <Link href={"/blogs"} className="btn-primary button-md radius-md m-t20">
                View All <BsArrowRight />
              </Link>
            </div>
          </div>
          <hr />

          <div className="row">
            {Content.map((item) => (
              <div className="col-lg-3 m-b20">
                <div className="">
                  <Image
                    className="m-b20"
                    style={{ borderRadius: "15px" }}
                    src={item.thumb}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                  <h6 className="m-b20">{item.title}</h6>
                  <span className="m-b10">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlogs;
