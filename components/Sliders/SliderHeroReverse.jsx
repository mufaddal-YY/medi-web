import Slider from "react-slick";

const content = [
  {
    title: "Physician",
  },
  {
    title: "Nursing",
  },
  {
    title: "Resident Doctors",
  },
  {
    title: "Physiotherapist",
  },
  {
    title: "Dentist",
  },
  {
    title: "Pathologist",
  },
  {
    title: "Cardiologist",
  },
  {
    title: "Lab Assistant",
  },
  {
    title: "Orthopaedic",
  },
  {
    title: "Physician",
  },
  {
    title: "Nursing",
  },
  {
    title: "Resident Doctors",
  },
  {
    title: "Physiotherapist",
  },
  {
    title: "Dentist",
  },
  {
    title: "Pathologist",
  },
  {
    title: "Cardiologist",
  },
  {
    title: "Lab Assistant",
  },
  {
    title: "Orthopaedic",
  },
 
];

const Testi = () => {
  const settings = {
    
    slidesToScroll: -1,
    dots: false,
    infinite: true,
    loop: true,
    slidesToShow: 7,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "ease-in",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider
        {...settings}
        className="testimonial-carousel style2  arrow-none "
      >
        {content.map((item) => (
          <div className="slider-item">
              <div className="btn-outline-primary radius-md text-center align-items-center">
                  <span>{item.title}</span>
                </div>
            
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testi;
