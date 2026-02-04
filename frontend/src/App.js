import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { JPMPipeline } from "./components/JPMPipeline";
import { StreamPipeline } from "./components/StreamPipeline"

import { MainLayout } from "./layouts/MainLayout";
import { ProjectLayout } from "./layouts/ProjectLayout";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Routes>

        {/* Main site layout */}
        <Route
          path="/"
          element={
            <MainLayout
              showBackToTop={showBackToTop}
              scrollToTop={scrollToTop}
            />
          }
        >
          <Route
            index
            element={
              <>
                <Banner />
                <Skills />
                <Projects />
                <div id="contact-us">
                  <Contact />
                </div>
              </>
            }
          />
        </Route>

        {/* Project layout */}
        <Route
          path="/projects"
          element={<ProjectLayout 
              showBackToTop={showBackToTop}
              scrollToTop={scrollToTop}
          />}
        >
          <Route
            path="jpm-pipeline"
            element={<JPMPipeline />}
          />
          <Route
            path="streaming-pipeline"
            element={<StreamPipeline />}
          />
        </Route>

      </Routes>
    </Router>

  );
}

export default App;
