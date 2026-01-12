import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Certifications } from "./pages/Certifications";
import { Contact } from "./pages/Contact";
import { ScrollToTop } from "./components/ScrollToTop";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <CustomCursor />
      <ScrollToTop /> 
      <div className="min-h-screen font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
