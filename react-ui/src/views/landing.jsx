import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getRockets } from "../redux/actions";
import Rockets from "../components/rocket";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  
  return (
    <>
      <Rockets />
    </>
  );
};

export default Landing;
