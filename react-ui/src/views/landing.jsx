import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRockets } from "../redux/actions";
import { getCrew } from "../redux/actions";
import { getDragons } from "../redux/actions";
import { getHome } from "../redux/actions";

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

  return <></>;
};

export default Landing;
