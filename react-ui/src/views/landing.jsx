import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRockets } from "../redux/actions";
import { getCrew } from "../redux/actions";
import { getDragons } from "../redux/actions";
import { getHome } from "../redux/actions";
import { Route, Routes } from "react-router-dom";
import Crew from "../components/crew";
import Rockets from "../components/rockets";
import Home from "../components/home";
import Dragons from "../components/dragons";
import Rocket from "../components/rocket";

const Landing = () => {
  const dispatch = useDispatch();
  const [selectedRocket, setSelectedRocket] = useState(null);
  const [rockets, setRockets] = useState([]);

  const handleClick = (e) => {
    const targetId = e.target.id;
    const selectedRocket = rockets.filter((rocket) => {
      return rocket.id === targetId;
    });

    setSelectedRocket(selectedRocket[0]);
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  const fetchRockets = () => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((data) => data.json())
      .then((response) => {
        setRockets(response);
      });
  };

  const rocketsData = useSelector((state) => state.rocket);

  useEffect(() => {
    dispatch(getCrew());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  return (
    <>
      {rocketsData.length &&
        rocketsData.map((rocket) => (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Crew" element={<Crew />} />
            <Route path="Dragons" element={<Dragons />} />
            <Route path="Rockets" element={<Rockets />}>
              {selectedRocket && (
                <Route
                  path={`./${rocket.name.replace(/ /g, "")}`}
                  element={
                    <Rocket
                      action={handleClick}
                      selectedRocket={selectedRocket}
                    />
                  }
                />
              )}
            </Route>
          </Routes>
        ))}
    </>
  );
};

export default Landing;
