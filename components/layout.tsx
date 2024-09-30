import React, { useEffect, useState } from "react";
import Navbar from "./header";
import Footer from "./footer";
import ScrollToTop from "./scrollToTop";
import SideBarMenu from "./sideBar";

export const Layout = ({ children }: any) => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  useEffect(() => {
    console.log("isSideMenuVisible : ", isSideMenuVisible);
  }, [isSideMenuVisible]);

  return (
    <div className="Layout relative">
      {isSideMenuVisible && <SideBarMenu />}
      <Navbar
        isSideMenuVisible={isSideMenuVisible}
        setIsSideMenuVisible={setIsSideMenuVisible}
      />
      <main className="h-full">{children}</main>
      {/* <ScrollToTop /> */}
      {/* <Footer /> */}
    </div>
  );
};
