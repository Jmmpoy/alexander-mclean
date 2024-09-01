import React from "react";
import Navbar from "./header";
import Footer from "./footer";
import ScrollToTop from "./scrollToTop";

export const Layout = ({ children }: any) => {
  return (
    <div className="Layout relative">
      <Navbar />
      <main className="h-full">{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};
