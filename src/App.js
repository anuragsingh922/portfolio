import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Landing from "./Components/Landing/Landing"; // Keep this eagerly loaded
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Work from "./Components/Work/Work";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";
import NotFound from "./Components/404/NotFound";
const Projects = lazy(() => import("./Components/Projects/Projects"));

function App() {
  // Suspense fallback with a simple loader animation
  const FallbackLoader = () => {
    return (
      <div className="fallback-container min-h-[100vh] flex items-center justify-center">
        <div>
          <Loader2 className="animate-spin" />
        </div>
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
                  <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.7, opacity: 0.7 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Landing />
                  </motion.div>
                  <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.7, opacity: 0.7 }}
                    transition={{ duration: 0.4 }}
                  >
                    <About />
                  </motion.div>
                  <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.7, opacity: 0.7 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Education />
                  </motion.div>
                  <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.7, opacity: 0.7 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Experience />
                  </motion.div>
                  <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.7, opacity: 0.7 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Skills />
                  </motion.div>
                  <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.7, opacity: 0.7 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Work />
                  </motion.div>
                  <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.7, opacity: 0.7 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ContactUs />
                  </motion.div>
                  <motion.div
                    whileInView={{ scale: 1, opacity: 1 }}
                    initial={{ scale: 0.7, opacity: 0.7 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Footer />
                  </motion.div>
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
