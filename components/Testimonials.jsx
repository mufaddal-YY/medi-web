"use client";
import Image from "next/image";
import Slider from "react-slick";
import ClientThumb from "@assets/images/clientThumb.png";
const content = [
  {
    thumb: ClientThumb,
    name: "Mukesh Joshi",
    testimonial:
      "We are extremely happy with the services of Medirecruiters. We were able to get the right candidate for our hospital in a very short time. The consultants were very helpful and professional. We highly recommend Medirecruiters to any hospital looking for a reliable recruitment agency ",
    description: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    thumb: ClientThumb,
    name: "Bhavesh Kantharia",
    testimonial:
      "We recently used the services of Medirecruiters to fill a vacancy for a general physician in our friend's hospital. To start with, we were skeptical as to how a lady consultant can do such a big & crucial task. We are very surprised & pleased with the outcome. The whole process was smooth and efficient, much more than the expectations. The consultants were very helpful and professional. We highly recommend Medirecruiters for their services of Drs recruitment ",
    description: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    thumb: ClientThumb,
    name: "Pratiksha Ghadge",
    testimonial:
      "We had a vacancy for a Cardiologist at our hospital in Delhi and we decided to use Medirecruiters for the recruitment. We are very satisfied with the whole process. The staff was extremely organized and professional. We got the best candidate for the position. We would definitely recommend Medirecruiters for their services",
    description: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    thumb: ClientThumb,
    name: "Manish Singh",
    testimonial:
      "Medirecruiters made the process of recruiting doctors for our hospital in Bhubaneswar so easy! They provided us with a great pool of qualified candidates and were always willing to answer any questions we had. We're very pleased with the quality of doctors they placed in our hospital and would highly recommend them to anyone looking to recruit doctors",
    description: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    thumb: ClientThumb,
    name: "Pallavi Aghade",
    testimonial:
      "We had a great experience working with Medirecruiters. Their team was knowledgeable and helpful throughout the process, and they were able to find us the perfect doctor for our practice ",
    description: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    thumb: ClientThumb,
    name: "Siddhartha Bhansali",
    testimonial:
      "We recently used the services of Medirecruiters to fill the post of a Neurosurgeon in our hospital. We were very impressed with the whole process. They managed to find us the ideal candidate in no time. We are very thankful to Medirecruiters and would definitely recommend their services to anyone looking for a reliable recruitment agency ",
    description: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    thumb: ClientThumb,
    name: "Ashwini Chavhan",
    testimonial:
      "I was placed in a hospital in Wisconsin through Medirecruiters and couldn't be happier. They worked with me to find the perfect hospital for my needs and made sure the entire process went smoothly. Highly recommend them for any doctor looking for a great place to practice. ",
    description: "Lorem ipsum dolor sit amet, consetetur",
  },
];

const Testimonials = () => {
  const settings = {
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slideTransition: "linear",
    autoplay: true,
    autoplayTimeout: 500,
    autoplaySpeed: 3200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="section-container section-sp2 heroBg">
        <div className="container">
          <div className="m-b20">
            <span className="text-red">Testimonials</span>
            <h3>
              We are the talk <span className="text-red">of the town!</span>
            </h3>
          </div>
        </div>
        <div className="container">
          <Slider {...settings} className="testimonial-carousel style2 arrow-none">
            {content.map((item) => (
              <div className="slider-item ">
                <div className="p-10">
                  <div className="m-b50 m-t20" >
                    <p>{item.testimonial}</p>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <div className="m-b30">
                      <h6 className="m-b0">{item.name}</h6>
                      <span className="m-t0">{item.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
