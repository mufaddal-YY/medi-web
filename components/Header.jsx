"use client";

import React from "react";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Sticky from "react-stickynode";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import withRouter
import { BsArrowRight } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
import Iconify from "@components/iconify/Iconify";

// Images
import logo from "@assets/images/logo.png";
import Divider from "@mui/material/Divider";
import { FiSmartphone } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import AccountPopover from "./Popover/AccountPopover";

function Header() {
  const { replace, push } = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    // Mobile Menu sidebar function
    var btn = document.querySelector(".menuicon");
    var nav = document.querySelector(".menu-links");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Mobile Submenu open close function
    var navMenu = [].slice.call(
      document.querySelectorAll(".menu-links > ul > li")
    );

    for (var y = 0; y < navMenu.length; y++) {
      navMenu[y].addEventListener("click", function () {
        menuClick(this);
      });
    }

    function menuClick(current) {
      const active = current.classList.contains("open");
      navMenu.forEach((el) => el.classList.remove("open"));

      if (active) {
        current.classList.remove("open");
        console.log("active");
      } else {
        current.classList.add("open");
        console.log("close");
      }
    }

    return () => {
      btn.removeEventListener("click", toggleFunc);
      navMenu.forEach((el) => el.removeEventListener("click", menuClick));
    };
  }, []);

  return (
    <header className="header rs-nav ">
      <Sticky enabled={true} className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container clearfix">
            <div className="menu-logo">
              <Link href="/">
                <Image src={logo} width={150} height={50} />
              </Link>
            </div>

            <button
              className="navbar-toggler collapsed menuicon justify-content-end m-t20"
              type="button"
              data-toggle="collapse"
              data-target="#menuDropdown"
              aria-controls="menuDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="secondary-menu">
              <div className="header-contact">
                {!session ? (
                  (<Link
                    href="/auth/login"
                    className="btn-primary  button-sm radius-sm">
                    Login <BsArrowRight />
                  </Link>)
                ) : (
                  <AccountPopover replace={replace} push={push} />
                )}
              </div>
            </div>

            {/* <!-- Navigation Menu ==== --> */}
            <div
              className="menu-links navbar-collapse collapse justify-content-center"
              id="menuDropdown">
              <div className="menu-logo">
                <Link href="/">
                  <Image src={logo} width={250} height={80} />
                </Link>
              </div>

              <ul className="nav navbar-nav">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>

                <li>
                  <Link href={"/jobs"}>Jobs</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/directors-message"}>Director's Message</Link>
                </li>
                <li>
                  <Link href={"/blogs"}>Blogs</Link>
                </li>

                <li className="hidden-desk">
                {session ? (
                  (<Link href={"/auth/login"} onClick={signOut}> <Iconify icon="solar:logout-2-bold" color="#DF3E30" /> Logout</Link>)
                ) : (
                 ""
                )}
                  
                </li>
              </ul>
            </div>
            {/* <!-- Navigation Menu END ==== --> */}
          </div>
        </div>
      </Sticky>
    </header>
  );
}

export default Header;
