import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Prices from "./pages/Prices";
import News from "./pages/News";
import Analytics from "./pages/Analytics";
import Salon from "./pages/Salon";
import Transport from "./pages/Transport";
import SeatAds from "./pages/SeatAds";
import Banners from "./pages/Banners";
import Patents from "./pages/Patents";
import Ceiling from "./pages/Ceiling";
import Doors from "./pages/Doors";
import Gallery from "./pages/Gallery";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/news" element={<News />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/salon" element={<Salon />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/seat-ads" element={<SeatAds />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/patents" element={<Patents />} />
            <Route path="/ceiling" element={<Ceiling />} />
            <Route path="/doors" element={<Doors />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
export default App;