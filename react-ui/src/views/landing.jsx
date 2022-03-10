import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getRockets } from "../redux/actions";

const Landing = () => {
  const dispatch = useDispatch();

  const rocketData = useSelector((state) => state.rocket);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <>
      {rocketData.length &&
              rocketData.map((rocket, index) =>
                  <div key={index}>{rocket.name}</div>)}
    </>
  );
};

export default Landing;
