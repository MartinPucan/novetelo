import React from "react";
import NavBar from "./NavBar";
import Description from "./Description";
import Services from "./Services";
import FoodCarousel from "./FoodCarousel";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <main className="layout">
          <Description />
          <Services />
          <FoodCarousel />
      </main>
      <Footer />
    </>
  );
}

export default App;
