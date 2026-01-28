import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const MainLayout = ({ showBackToTop, scrollToTop }) => {
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