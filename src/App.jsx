import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";
import Footer from "./components/Footer";

function App() {
  console.log("import.meta.env.DEV", import.meta.env.DEV);
  return (
    <main className="bg_ocean">
      <BrowserRouter basename={"/Recursion-ResumeWebsite/"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
