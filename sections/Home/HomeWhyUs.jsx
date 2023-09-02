"use client";
import * as React from "react";
import { Nav, Tab } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import TabImage from "@assets/images/tabImage.png";

const HomeWhyUs = () => {
  return (
    <>
      <div className="section-container section-sp2 heroBg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-b30">
              <Image src={TabImage} alt="Why Us" width={800} height={500} />
            </div>
            <div className="col-lg-6">
              <h6 className="text-red">Why Us?</h6>
              <h3 className="mt">
                Healthcare
                <span className="text-red"> Recruitment Consultants</span>
              </h3>
              <p className="m-b20">
                MediRecruiters is a healthcare placement consultancy in India,
                with an exclusive database of over 10 lakh doctors and healthcare
                professionals. We help talented doctors advance their careers in
                India and support hospitals by providing the best teams quickly.
              </p>
              
                <div className="row " data-wow-delay="0.4s">
                  <div className="ttr-tabs product-description tabs-site-button">
                    <Tab.Container
                      id="product-description"
                      defaultActiveKey="0">
                      <Nav className="nav nav-tabs" defaultActiveKey="0">
                        <Nav.Item>
                          <Nav.Link eventKey="0">Our Vision</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="1">Our Mission</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="2">
                            Our Services
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="0">
                          <p>
                            By the year 2025, every more than 50 bedded hospital
                            of every Metropolitan city of India will have a
                            MediRecruiters Doctor placed in.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="1">
                          <p>
                            To be the fastest service providers and effective
                            mediators of quality Healthcare personnel and be a
                            significant pillar for a fit & healthy India.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                          <p>
                            <li>Database of over 10 lakh Doctors & Healthcare Professionals across India. </li>
                            <li>Pan-India Level Recruitment Consultancy. </li>
                            <li>Placement of more than 150 Doctors per year.</li>
                            <li>Provision of services in Rural location & Metro cities, across India.</li>
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWhyUs;
