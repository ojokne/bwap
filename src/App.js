import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";
import Profile from "./pages/Profile";
import Careers from "./pages/Careers";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Ham from "./pages/projects/Ham";
import Stadium from "./pages/projects/Stadium";
import GreenHill from "./pages/projects/GreenHill";
import Pentecostal from "./pages/projects/Pentecostal";
import Nol from "./pages/projects/Nol";
import Flowershop from "./pages/projects/Flowershop";
import HamAgro from "./pages/projects/HamAgro";
import HamPalm from "./pages/projects/HamPalm";
import Maple from "./pages/projects/Maple";
import HamSport from "./pages/projects/HamSport";

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const removeSpinner = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    removeSpinner();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="slide-page">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ham" element={<Ham />} />
            <Route path="/stadium" element={<Stadium />} />
            <Route path="/greenhill" element={<GreenHill />} />
            <Route path="/pentecostal" element={<Pentecostal />} />
            <Route path="/nol" element={<Nol />} />
            <Route path="/flowershop" element={<Flowershop />} />
            <Route path="/ham_agro" element={<HamAgro />} />
            <Route path="/ham_palm" element={<HamPalm />} />
            <Route path="/maple" element={<Maple />} />
            <Route path="/ham_sport" element={<HamSport />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
