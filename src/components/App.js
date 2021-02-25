import NavBar from "./NavBar";
import Description from "./Description";
import Services from "./Services";
import FoodCarousel from "./FoodCarousel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="layout">
          <Description />
          <Services />
          <FoodCarousel />
      </section>
    </div>
  );
}

export default App;
