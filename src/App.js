import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Landing from "./Components/Landing/Landing";  // Keep this eagerly loaded

// Lazy load components
const About = lazy(() => import("./Components/About/About"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const Education = lazy(() => import("./Components/Education/Education"));
const Work = lazy(() => import("./Components/Work/Work"));
const ContactUs = lazy(() => import("./Components/ContactUs/ContactUs"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Experience = lazy(() => import("./Components/Experience/Experience"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const NotFound = lazy(() => import("./Components/404/NotFound"));

function App() {
  // Suspense fallback with a simple loader animation
  const FallbackLoader = () => {
    return (
      <div className="fallback-container">
        <div className="loader"></div>
      </div>
    );
  };

  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Landing />
                  <About />
                  <Education />
                  <Experience />
                  <Skills />
                  <Work />
                  <ContactUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Projects />
                </>
              }
            />
            <Route
              path="/*"
              element={
                <>
                  <NotFound />
                </>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
