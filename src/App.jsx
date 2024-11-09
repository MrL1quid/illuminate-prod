import { Route, Routes, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import UniMain from "./projects/Uni/UniMain";
import CVMain from "./projects/CV/CVMain";
import Contact from "./pages/Contact";
import "./General.css";
import ContextHolder from "./Components/ContextHolder";

function App() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.startsWith("/projects/") ||
        location.pathname === "/projects/" ? (
        <div className={styles.mainApp}>
          <ContextHolder>
            <Loader />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </ContextHolder>
        </div>
      ) : (
        ""
      )}

      <Routes>
        <Route path="/projects/student-hotels/*" element={<UniMain />} />
      </Routes>
      <Routes>
        <Route path="/projects/cv-app/*" element={<CVMain />} />
      </Routes>
    </>
  );
}

export default App;
