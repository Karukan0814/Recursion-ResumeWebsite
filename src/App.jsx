import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";
// import Footer from "./components/Footer";

const App = () => {
  return (
    // <main className="bg-slate-300/20ls">
    <main className="bg_ocean">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
