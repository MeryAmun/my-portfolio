import { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Sidebar, Footer, Loader } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Projects } from "./pages";
import { Slide } from "react-awesome-reveal";
import { IoIosArrowDropup } from "react-icons/io";
import useScrollPosition from "@react-hook/window-scroll";

function App() {
  const [loading, setLoading] = useState(true);
  const [displayScroll, setDisplayScroll] = useState(false)
  const scrollY = useScrollPosition(60 /*frames per second*/);

  useEffect(() => {
    if (scrollY >= 1530) {
      setDisplayScroll(true)
    } else {
      setDisplayScroll(false)
    }

  }, [scrollY])

  useEffect(() => {

    setInterval(() => {
      setLoading(false)

    }, 3000)
  })
  return (
    <div className="app">
      {
        loading ? (
          <Loader />
        ) : (
          <>
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
            {
              displayScroll && (
                <a href="#top">
                  <IoIosArrowDropup size={30} color="#4db5ff" className="app__topIcon" />
                </a>
              )
            }
            <Footer /></>
        )
      }
    </div>
  );
}

export default App;
