import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import DisneyCard from "./Components/DisneyCard";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMovieList from "./Components/GenreMovieList";
import Footer from "./Components/footer";


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <DisneyCard />
      <Footer />
    </div>
  );
}

export default App;
