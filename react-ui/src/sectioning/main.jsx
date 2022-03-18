import { Route, Routes } from "react-router-dom";
import Crew from "../components/crew";
import Dragons from "../components/dragons";
import Landing from "../views/landing";
import RocketsMain from "../views/rockets";
import Rockets from "../components/rockets";

const main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Crew" element={<Crew />} />
        <Route path="Dragons" element={<Dragons />} />
        <Route path="Rockets" element={<RocketsMain />}>
          <Route path="all" element={<Rockets />} />
          {/* this is hardcoded for debugging but you can build it dynamically like you did in rockets.jsx */}
          <Route path="Falcon1" element={<p>heythere!</p>} />
        </Route>
      </Routes>
    </main>
  );
};

export default main;
