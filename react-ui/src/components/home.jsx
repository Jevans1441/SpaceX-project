import { useSelector } from "react-redux";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import spaceXLogo from "../images/logo.svg";
import { CardMedia } from "@mui/material";

const Home = () => {
  const homeData = useSelector((state) => state.home);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const card = (
    <React.Fragment>
      <CardContent style={{ backgroundColor: "#005288", color: "#A7A9AC" }}>
        <Typography sx={{ fontSize: 30 }} gutterBottom></Typography>
        <Typography variant="h5" component="div">
          {homeData.summary}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          <br />
          {homeData.name} was founded by {homeData.founder} in{" "}
          {homeData.founded}
        </Typography>
        <Typography variant="body2">Website links go here</Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
      <Box sx={{ maxWidth: "70%", marginLeft: "3vw" }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
};

export default Home;
