import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
