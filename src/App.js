import react from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "react-hot-toast";
// import { motion } from "framer-motion";
// import { EarthCanvas } from "./assets/canvas/Earth.jsx";
// import { slideIn } from "./utils/motion";

// import ClgImg from "./assets/images/educat/iiitlogo.jpg";
// import Profile from "./assets/images/Anurag-2.jpg";;
import NotFound from "./Components/404/NotFound";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Work from "./Components/Work/Work";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";

function App() {

  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Landing/>
                <About/>
                <Education/>
                <Experience/>
                <Skills/>
                <Work/>
                <ContactUs/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Projects/>
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
      </Router>
    </>
  );
}

export default App;
