import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";


function App() {
  let [loading, setLoading] = useState(true);
  
useEffect(() => {
  const removeSpinner = () => {
    setTimeout( ()=>{
      setLoading(false)
    },3000)
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
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
