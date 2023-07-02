import "@styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@styles/color/color-1.css";
import "@styles/color/color-2.css";
// import '@/styles/assets.css'
import "@styles/dashboard.css";
// import '@/styles/style.min.css'
import "@styles/typography.css";
import "@styles/shortcodes/accordion.css";
import "@styles/shortcodes/alert.css";
import "@styles/shortcodes/breadcrumb.css";
import "@styles/shortcodes/button.css";
import "@styles/shortcodes/divider.css";
import "@styles/shortcodes/form.css";
import "@styles/shortcodes/icon-box.css";
import "@styles/shortcodes/layout.css";
import "@styles/shortcodes/list.css";
import "@styles/shortcodes/overlay.css";
import "@styles/shortcodes/owl.css";
import "@styles/shortcodes/pagination.css";
import "@styles/shortcodes/pricingtable.css";
import "@styles/shortcodes/separator.css";
import "@styles/shortcodes/shortcodes.css";
import "@styles/shortcodes/widget.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fonts
import "./../vendors/fontawesome/css/font-awesome.min.css";
import "./../vendors/flaticon/flaticon.css";
import "./../vendors/line-awesome/css/line-awesome.min.css";
import "./../vendors/themify/themify-icons.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import React from "react";
import AuthProvider from "@components/AuthProvider";
import LocalProvider from "@components/LocalizationProvider";

export const metadata = {
  title:
    "Medirecruiters | 1st ever healthcare placement consultancy directed by a consultant Doctor. ",
  description:
    "1st ever healthcare placement consultancy directed by a consultant Doctor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <LocalProvider>
            <Header />
            {children}
            <Footer />
          </LocalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
