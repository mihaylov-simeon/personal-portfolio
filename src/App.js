import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    // Load the contact form script when component mounts
    const script = document.createElement('script');
    script.src = './Contact.js'; // Adjust the path if needed
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
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
    </div>
  );
}

export default App;
