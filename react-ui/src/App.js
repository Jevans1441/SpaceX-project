import { Route, Routes } from "react-router-dom";
import Crew from "./components/crew";
import NavBar from "./components/navbar";
import Rockets from "./components/rocket";
import Home from "./components/home";
import Dragons from "./components/dragons";
import { Footer, Header, Main } from "./sectioning";
import "./styles.css";

const App = () => {
  return (
    <>
      <div className="home-background">
        <Header />
        <NavBar />
        <Main />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Crew" element={<Crew />} />
          <Route path="Rockets" element={<Rockets />} />
          <Route path="Dragons" element={<Dragons />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
