import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return <>
    <Header />
    <Hero />
    <About />
    <Works />
    <Contact />
    <Footer />
  </>
}

export default App;