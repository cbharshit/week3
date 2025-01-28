import React from "react";
import "./App.css"; // Import the styles
import Banner from "./components/Banner/Banner";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Banner />
      <Profile />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
