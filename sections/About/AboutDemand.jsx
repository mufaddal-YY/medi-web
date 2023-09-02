import VideoImage from "@assets/images/videoThumb.png";
import Image from "next/image";

const vision = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    viewBox="0 0 69.117 51.085">
    <g
      id="Icon_feather-eye"
      data-name="Icon feather-eye"
      transform="translate(0 -4.5)">
      <path
        id="Path_12695"
        data-name="Path 12695"
        d="M1.5,30.042S13.521,6,34.558,6,67.617,30.042,67.617,30.042,55.6,54.085,34.558,54.085,1.5,30.042,1.5,30.042Z"
        transform="translate(0)"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
      <path
        id="Path_12696"
        data-name="Path 12696"
        d="M31.532,22.516A9.016,9.016,0,1,1,22.516,13.5,9.016,9.016,0,0,1,31.532,22.516Z"
        transform="translate(12.042 7.527)"
        fill="#574cf9"
      />
    </g>
  </svg>
);

const chart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    viewBox="0 0 58.691 58.674">
    <g
      id="Icon_feather-pie-chart"
      data-name="Icon feather-pie-chart"
      transform="translate(-1.48 -3)">
      <path
        id="Path_12697"
        data-name="Path 12697"
        d="M57.913,41.577A28.585,28.585,0,1,1,20.152,4.245"
        transform="translate(0 1.128)"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
      <path
        id="Path_12698"
        data-name="Path 12698"
        d="M46.585,31.585A28.585,28.585,0,0,0,18,3V31.585Z"
        transform="translate(13.586 0)"
        fill="#574cf9"
      />
    </g>
  </svg>
);

const book = (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} viewBox="0 0 51 68">
    <g
      id="Group_27372"
      data-name="Group 27372"
      transform="translate(7524 13938)">
      <g
        id="Rectangle_1863"
        data-name="Rectangle 1863"
        transform="translate(-7524 -13931)"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-width="2">
        <rect width="51" height="61" rx="7" stroke="none" />
        <rect x="1" y="1" width="49" height="59" rx="6" fill="none" />
      </g>
      <g
        id="Rectangle_1864"
        data-name="Rectangle 1864"
        transform="translate(-7512 -13936)"
        fill="#574cf9"
        stroke="#f8f9fb"
        stroke-width="2">
        <rect width="27" height="13" rx="3" stroke="none" />
        <rect x="-1" y="-1" width="29" height="15" rx="4" fill="none" />
      </g>
      <g
        id="Icon_feather-list"
        data-name="Icon feather-list"
        transform="translate(-7517.9 -13916.5)">
        <path
          id="Path_12699"
          data-name="Path 12699"
          d="M12,9H31.5"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_12700"
          data-name="Path 12700"
          d="M12,18H31.5"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_12701"
          data-name="Path 12701"
          d="M12,27H31.5"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_12702"
          data-name="Path 12702"
          d="M4.5,9h0"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_12703"
          data-name="Path 12703"
          d="M4.5,18h0"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_12704"
          data-name="Path 12704"
          d="M4.5,27h0"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </g>
  </svg>
);

const Content = [
  {
    title: "Our Vision",
    icon: vision,
    description:
      "By the year 2025, every more than 50 bedded hospital of every Metropolitan city of India will have a MediRecruiters Doctor placed in.",
  },
  {
    title: "Our Mission",
    icon: chart,
    description:
      "To be the fastest service providers and effective mediators of quality Healthcare personnel and be a significant pillar for a fit & healthy India.",
  },
  {
    title: "Our Services",
    icon: book,
    description:
      "Database of over 4 lakh Doctors & Healthcare Professionals across India. " +
      "Pan-India Level Recruitment Consultancy. " +
      "Placement of more than 150 Doctors per year. " +
      "Provision of services in Rural location & Metro cities, across India.",
  },
];

const AboutDemand = () => {
  return (
    <>
      <div className="section-container section-sp4 heroBg">
        <div className="container">
          <div className="text-left">
            <h3>
              About <span className="text-red">Medirecruiters</span>
            </h3>
          </div>

          <div className="text-left">
            <p>
              Step into the world of MediRecruiters, where we are rewriting the
              script of success for doctors across India. As the trailblazing
              pioneers of the doctor's placement consultancy, we have been
              transforming the healthcare landscape since our inception on
              September 21st, 2012. Led by the visionary consultant doctor and
              esteemed pathologist, Dr. Shilpa Totala, we have become the
              driving force behind the career aspirations of medical
              professionals nationwide.
            </p>

            <p>
              Our mission is simple yet profound: 'Healthy Humans.' With an
              unwavering commitment to this cause, we have set our sights on an
              audacious goal of placing 10 million doctors worldwide. At
              MediRecruiters, we firmly believe that a world filled with healthy
              individuals begins by empowering doctors with the opportunities
              they deserve.
            </p>

            <p>
              Picture a future where doctors flourish, finding not only
              professional success but also unbridled joy and prosperity in
              their chosen paths. This is the vision we strive to bring to life
              at MediRecruiters, where we are dedicated to serving peace,
              pleasure, and prosperity to doctors around the globe. By
              championing their cause, we aim to catalyze a ripple effect of
              positive change that reverberates through the entire healthcare
              ecosystem.
            </p>

            <p>
              Immerse yourself in our unparalleled network, boasting an
              impressive database of over 1.5 million doctors. With a wide range
              of talents and specialties at our fingertips, we have become the
              ultimate destination for medical professionals seeking exceptional
              career opportunities. From talented general practitioners to
              brilliant specialists and super-specialists, we have the right fit
              for every medical discipline.
            </p>

            <p>
              Our impact speaks volumes, as we have already paved the way for
              more than 1,500 doctors to find their rightful place across the
              nation. Among them, over 650 specialists and super-specialists
              have reached new heights in their esteemed careers. Our reach
              extends across 450 vibrant cities in India, including the
              pulsating metropolises of Mumbai, Pune, Kolkata, Chennai, Delhi,
              Bangalore, Nagpur, Ahmedabad, Aurangabad, and a host of other
              healthcare hotspots.
            </p>

            <p>
              Embracing excellence, we have strategically positioned branch
              offices to ensure personalized service and unmatched support. From
              our headquarters in Aurangabad, the birthplace of our noble
              venture, to the bustling hubs of Mumbai, Pune, and Bangalore, we
              are where the heartbeat of the medical community thrives. These
              strategic locations allow us to intimately understand the unique
              needs and aspirations of doctors and seamlessly connect them with
              prestigious healthcare institutions.
            </p>

            <p>
              Behind the scenes, our team of passionate experts fuels our
              success. Armed with profound knowledge and a deep understanding of
              the healthcare industry, they work tirelessly to curate the
              perfect match between doctors and institutions. We recognize that
              success goes beyond qualifications; it demands a profound
              alignment of values, aspirations, and culture. By embracing a
              personalized approach, we ensure that every placement is a
              stepping stone towards a remarkable and fulfilling journey.
            </p>

            <p>
              Trust is the cornerstone of our thriving ecosystem. We have earned
              the unwavering trust and respect of doctors and healthcare
              organizations across the nation. By nurturing strong relationships
              and fostering open lines of communication, we create an atmosphere
              of collaboration, where dreams are transformed into reality.
            </p>

            <p>
              Whether you are a doctor yearning for new frontiers and
              exhilarating challenges or a healthcare institution in pursuit of
              exceptional talent, MediRecruiters is your unwavering partner in
              progress. Unleash the power of the MediRecruiters experience,
              where careers are catapulted to unimaginable heights and
              healthcare institutions are fortified with brilliance.
            </p>

            <p>
              Together, let's embark on an extraordinary journey, redefining the
              future of healthcare one placement at a time. At MediRecruiters,
              we believe in the remarkable potential of doctors to shape a
              healthier world. Join us as we revolutionize the landscape of
              medicine, empowering doctors to leave an indelible mark on
              humanity.
            </p>
          </div>

          <div className="row m-t80">
            {Content.map((item) => (
              <div className="col-lg-4">
                <div className="text-center p-20">
                  <p>{item.icon}</p>
                  <p className="text-dark">
                    <strong>{item.title}</strong>
                  </p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center m-t30">
            <iframe
              width="100%"
              height="600vh"
              src="https://www.youtube.com/embed/M_ONmdWugkw?si=MQPFI6AvgA2HKOf3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            {/* <Image src={VideoImage} width={900} height={200} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDemand;
