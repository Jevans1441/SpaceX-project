import NavBar from "./components/navbar";
import { Footer, Header, Main } from "./sectioning";
import "./styles.css";

const App = () => {
  return (
    <>
      <div className="home-background">
        <Header />
        <NavBar />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
