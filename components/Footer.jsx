"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/images/logo.png";
import { Stack, Divider } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="footer-top footer-style2 bt0">
        <div className="container">
          <div className="justify-content-center">
            <div className="d-flex justify-content-center justify-content-md-end">
              <Image width={250} src={logo} alt="Medirecruiters" />
            </div>
            <hr className="text-dark" />
            <div className="d-flex justify-content-between  align-items-center flex-wrap">
              <p>
                <strong className="text-dark">
                  © 2023. All Rights Reserved.
                </strong>
              </p>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                justifyContent={{ xs: "flex-start", sm: "flex-end" }}>
                <Link href={"/"}>Privacy Policy</Link>
                <Divider orientation="vertical" flexItem />
                <Link href={"/"}>Terms and Conditions</Link>
                <Divider orientation="vertical" flexItem />
                <Link href={"/"}>Admin</Link>
                <Divider orientation="vertical" flexItem />
                <Link href={"/"}>Contact Us</Link>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
