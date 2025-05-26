import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Rates from "./components/Rates";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </>
  );
}

export default App;
