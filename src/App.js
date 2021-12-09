import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";
import Profile from "./pages/Profile";
import Careers from "./pages/Careers";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";


function App() {
  let [loading, setLoading] = useState(true);
  
useEffect(() => {
  const removeSpinner = () => {
    setTimeout( ()=>{
      setLoading(false)
    },1000)
  }
  removeSpinner()
},[])
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='slide-page'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/services' element={<Services />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
