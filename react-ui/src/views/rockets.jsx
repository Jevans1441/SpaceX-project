import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// because we want to alternate between seeing all the rockets and just one rocket,
// we've made '/all' and '/Falcon1', for example sibling routes. if '/Falcon1' were
// nested in '/all', we would always see all them followed by the one with the detail
// and this is confusing so this parent view contains both and has minimal markup

// i've called this views/rockets.jsx but it would be better to name this something like
// rocketsView.jsx or something like that and then reuse it for views of the different
// types of rockets. even if you don't reuse it, change the name so you don't have two
// files with the same name.

const Rockets = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // this immediately adds '/all' to the URL so that it becomes '/Rockets/all'
    // we don't have to do this here, we could do it where we're building the links
    // in navBar.jsx but putting it here gives us a little more flexibility as the
    // app scales
    navigate('all');
  }, []);

  return (
    <>
      <h1>Rocket Page</h1>
      <Outlet />
    </>
  )
};

export default Rockets;