import "./App.css";
import React from "react";
import About from "./components/about/About";
import Contact from "./components/contacts/Contact";
import Experience from "./components/experience/Experience";
import Testimonial from "./components/testimonial/Testimonial";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

// import Qualification from "./components/qualification/Qualification";

function App() {
  // const [projectInfo, setProjectInfo] = useState("");
  let projectInfo = require("./assets/data.json");
  let reviewInfo = require("./assets/Review.json");
  return (
    <React.Fragment>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      {/* <Qualification></Qualification> */}
      <Portfolio projectInfo={projectInfo}></Portfolio>
      <Testimonial coworkerReview={reviewInfo}></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
