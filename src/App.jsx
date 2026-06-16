import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route
path="/portfolio"
element={<Portfolio />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;