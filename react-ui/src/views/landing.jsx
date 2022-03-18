import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Crew" element={<Crew />} />
        <Route path="Dragons" element={<Dragons />} />
        <Route path="Rockets" element={<Rockets />} />
        <Route path={"Rockets/:name"} element={<Rocket />} />
      </Routes>
    </>
  );
};

export default Landing;
