import React from "react";
import Navbar from "./components/header/Logo";
import Cards from "./components/header/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Cards />
      </div>
    </div>
  );
}

export default App;

