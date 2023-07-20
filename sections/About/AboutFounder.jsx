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
          <div className="col-lg-4 text-center order-md-2 m-b20">
              <Image src={Founder} width={400} />
            </div>
            <div className="col-lg-7">
              <p>
                Get ready to be captivated by the extraordinary director of
                MediRecruiters, the one and only Dr. Shilpa! With over 23 years
                of experience as a brilliant pathologist and a decade of
                unparalleled service in doctor's recruitment, Dr. Shilpa is a
                true force to be reckoned with. Her dynamic personality and
                unwavering dedication will instantly hook you as she
                revolutionizes the healthcare industry.
              </p>
              <p>
                Dr. Shilpa's impressive credentials include not only an MBBS
                degree and DPB qualification but also dual MBA degrees in HR and
                Hospital Administration. Her expertise as the Director of Kushal
                Path Lab has paved the way for her exceptional approach to
                doctor's recruitment, ensuring the perfect match between
                extraordinary talent and extraordinary opportunities.
              </p>
              <p>
                Under Dr. Shilpa's visionary guidance, MediRecruiters has soared
                to incredible heights, becoming the go-to destination for
                doctors across India. Her undying commitment to the success and
                prosperity of medical professionals has garnered her numerous
                prestigious accolades and recognition. Brace yourself for the
                jaw-dropping moment when Former Chief Minister Devendra Fadnavis
                personally awarded her the coveted 'Best Healthcare Placement
                Consultancy of India' title in 2017, solidifying her reputation
                as an industry luminary.
              </p>
            </div>

            
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                But Dr. Shilpa's talents don't stop there! She is also a
                captivating author, enchanting readers with her compelling book
                'Don't Choose Diamonds.' Brace yourself for an immersive journey
                filled with invaluable wisdom and life-changing insights that
                will leave you craving for more.
              </p>
              <p>
                Dr. Shilpa's magnetic presence extends to various conferences
                and events where she captivates audiences with her dynamic talks
                and deliberations. Whether it's a local gathering or an
                international symposium, her engaging presence and expert
                insights will have you hanging onto every word.
              </p>
              <p>
                Prepare to be dazzled by Dr. Shilpa's shining achievements. Her
                illustrious career has earned her esteemed accolades such as the
                prestigious 'Sakhi Samman' award from the influential Lokmat
                Group. And that's not all! In 2016, she was honored with the
                highly coveted 'Best Kaizen Organization' award in the
                Aurangabad chapter of QCFI. Brace yourself for another
                jaw-dropping moment when she received the prestigious 'India
                5000 Best MSME Award' in 2018, solidifying her position as an
                unparalleled leader and innovator.
              </p>
              <p>
                But Dr. Shilpa's infectious energy doesn't stop at her
                professional life. She is a true maven of arts, singing, dance,
                and social services, amassing countless local, state, national,
                and international awards. Her diverse talents and passionate
                commitment to making a difference in her community will leave
                you spellbound.
              </p>
              <p>
                Prepare to be enchanted and inspired by Dr. Shilpa's unwavering
                dedication, contagious charisma, and magnetic personality. Her
                visionary leadership has transformed MediRecruiters into an
                unrivaled success, while her contributions to various fields
                continue to captivate and ignite the hearts and minds of all who
                encounter her. Get ready to join her extraordinary journey as
                she reshapes the future of healthcare, one placement at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFounder;
