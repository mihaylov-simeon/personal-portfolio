import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const MainLayout = ({ showBackToTop, scrollToTop }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <NavBar variant="default" />
      <Outlet />
      <Footer variant="default" />

      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </div>
      )}
    </>
  );
};