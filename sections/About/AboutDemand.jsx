import VideoImage from '@assets/images/videoThumb.png'
import Image from 'next/image';

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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    viewBox="0 0 51 68">
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
  { title: "The Backbone of the Health Services Sector.", icon: vision, description: "1st ever Healthcare Placement Consultancy directed by a consultant Doctor.", },
  { title: "The Backbone of the Health Services Sector.", icon: chart, description: "1st ever Healthcare Placement Consultancy directed by a consultant Doctor.", },
  { title: "The Backbone of the Health Services Sector.", icon: book, description: "1st ever Healthcare Placement Consultancy directed by a consultant Doctor.", },
];

const AboutDemand = () => {
  return (
    <>
      <div className="section-container section-sp4 heroBg">
        <div className="container">
          <div className="text-center">
            <h3>
              Local Heroes to <span className="text-red">Global Demand</span>{" "}
            </h3>
            <p>
              <small>Be It a Recession or a Booming Economy Healthcare
              Professional Has Become Increasingly Competitive <br className="hidden" /> and the Demand
              for Doctors Allows Them to Be Even More Selective When Choosing a
              Position.</small>
            
            </p>
          </div>
          <div className="row m-t80">
            {Content.map((item) => (
              <div className="col-lg-4">
                <div className="text-center p-20">
                  <p>{item.icon}</p>
                  <p className="text-dark"> <strong>{item.title}</strong> </p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
            
          </div>

          <div className="d-flex justify-content-center m-t30">
            <Image src={VideoImage} width={900} height={200} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDemand;
