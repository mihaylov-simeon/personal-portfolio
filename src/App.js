import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact"; // Import default export

function App() {
  const observer = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Handle intersection events here
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    });

    // Observe elements when they are mounted
    document.querySelectorAll('.observe').forEach((element) => {
      observer.current.observe(element);
    });

    // Cleanup observer when component is unmounted
    return () => {
      observer.current.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div className="observe">
        <Skills />
      </div>
      <div className="observe">
        <Projects />
      </div>
      <div className="observe" id="contact-us">
        <Contact />
      </div>
      <Footer />
      {/* Back to Top button */}
      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </div>
      )}
    </div>
  );
}

export default App;
