import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRockets } from "../redux/actions";
import { getCrew } from "../redux/actions";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrew());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return <></>;
};

export default Landing;
