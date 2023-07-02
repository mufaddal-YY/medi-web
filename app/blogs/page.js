import Image from "next/image";
import Process1 from "@assets/images/blog1.png";
import Process2 from "@assets/images/blog2.png";
import Process3 from "@assets/images/blog4.png";
import Process4 from "@assets/images/blog3.png";
import Link from "next/link";

const Content = [
  {
    thumb: Process1,
    title: "Exploring the Lucrative Medical Job Market in India",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process2,
    title: "Top in demand medical jobs in India & Abroad",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process3,
    title: "Career Paths in the Indian Healthcare Industry",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process4,
    title: "Navigating the Challenges and Rewards of Medical Jobs in India",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process1,
    title: "Exploring the Lucrative Medical Job Market in India",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process2,
    title: "Top in demand medical jobs in India & Abroad",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process3,
    title: "Career Paths in the Indian Healthcare Industry",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process4,
    title: "Navigating the Challenges and Rewards of Medical Jobs in India",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process1,
    title: "Exploring the Lucrative Medical Job Market in India",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process2,
    title: "Top in demand medical jobs in India & Abroad",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process3,
    title: "Career Paths in the Indian Healthcare Industry",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
  {
    thumb: Process4,
    title: "Navigating the Challenges and Rewards of Medical Jobs in India",
    description:
      "Lorem ipsum dolor sit amet, cons etetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    author: "Dr. Shilpa Totala",
    date: "10-04-2023",
  },
];

const BlogPage = () => {
  return (
    <>
      <div className="section-container section-sp4">
        <div className="container">
          <div className="m-b30">
            <h6 className="text-red">Medirecruiters</h6>
            <h3 className="mt">
              Blogs and
              <span className="text-red"> News</span>
            </h3>
          </div>

          <hr />
          <div className="row m-t30">
            {Content.map((item) => (
              <div className="col-lg-3 m-b80">
                <div className="m-b10">
                  <Image
                    className="m-b20"
                    style={{ borderRadius: "15px" }}
                    src={item.thumb}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                  <h6 className="">{item.title}</h6>

                  <div className="d-flex justify-content-between m-b0">
                    <span className="text-red">
                      <small className="fw6 fs10">{item.author}</small>
                    </span>
                    <span className="text-red">
                      <small className="fw6 fs10">{item.date}</small>
                    </span>
                  </div>
                  <hr />

                  <span className="m-b20">{item.description}</span>
                </div>
                <Link
                  href={"/blogs"}
                  className="btn-secondary button-sm radius-sm ">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
