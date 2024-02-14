import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import AndDev from "./Components/Service/ServicePages/AndDev";
import AppDev from "./Components/Service/ServicePages/AppDev";
import DigPor from "./Components/Service/ServicePages/DigPor";
import GraphicDes from "./Components/Service/ServicePages/GraphicDes";
import SD from "./Components/Service/ServicePages/SD";
import WebDev from "./Components/Service/ServicePages/WebDev";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="webdev" element={<WebDev />} />
        <Route path="/appdev" element={<AppDev />} />
        <Route path="/digpor" element={<DigPor />} />
        <Route path="/graphicdes" element={<GraphicDes />} />
        <Route path="/sd" element={<SD />} />
        <Route path="/AndDev" element={<AndDev />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
