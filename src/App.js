import "./App.css";
import GetStarted from "./components/GetStarted";
import About from "./components/About";
import WhatHot from "./components/WhatHot";
import Expand from "./components/Expand";
import Listen from "./components/Listen";
import Footer from "./components/Footer";
import Header from "./components/NavBar";
import PlanSelection from "./components/PlanSelection";

function App() {
  return (
    <>
      <Header />
      {/* Render GEt started */}
      <GetStarted />
      {/* Render About Page here */}
      <About />
      {/* Render WhatHot Page here */}
      <WhatHot />
      {/* Render Expand Page here */}
      <Expand />
      {/* Render Expand Page here */}
      <Listen />
      {/* Render Expand Page here */}
      <Footer />
    </>
  );
}

export default App;
