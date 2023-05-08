import "./App.css";
import { Navbar, Sidebar, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Projects } from "./pages";
import Slide from "react-reveal/Slide";

function App() {
  return (
    <div className="app">
      <div className="app__navbar">
        <Navbar />
      </div>
      <div className="app__body">
        <Slide right>
        <div className="app__sidebar">
        <Sidebar />
        </div>
        </Slide>
        <div className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
