import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Lenis from "@studio-freight/lenis";
import ScrollTop from "./Components/ScrollTop";

const Layout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08, // smoother easing
      wheelMultiplier: 1.2,
      touchMultiplier: 1.2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <ScrollTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
