import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const ProjectLayout = ({ showBackToTop, scrollToTop }) => {
  return (
    <>
      <NavBar variant="project" />
      <Outlet />
      <Footer variant="project" />

      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </div>
      )}
    </>
  );
};
