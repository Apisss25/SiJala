import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Rules from "./pages/TrafficSigns";
import Navbar from "./component/Navbar";
import BasicRules from "./pages/Rules/BasicRules";
import SpecialRules from "./pages/Rules/SpecialRules";
import TrafficSigns from "./pages/TrafficSigns";
import { Features } from "tailwindcss";
import Footer from "./component/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/BasicRules" element={<BasicRules />} />
        <Route path="/SpecialRules" element={<SpecialRules />} />
        <Route path="/TrafficSigns" element={<TrafficSigns />} />
        <Route path="/Features" element={<Features />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
