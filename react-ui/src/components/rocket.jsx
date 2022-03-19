import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setIndividualRocket } from "../redux/actions";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Rocket = () => {
  let { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rocketList = useSelector((state) => state.rocket);
  const singleRocket = useSelector((state) => state.singleRocket);

  // const goBack = () => {
  //   navigate("/Rockets");
  // };

  useEffect(() => {
    const getIndividualRocket = () => {
      const individualRocket = rocketList.filter(
        (rocket) => rocket.name.replace(/ /g, "") === name
      );
      dispatch(setIndividualRocket(individualRocket));
    };
    getIndividualRocket();
  }, [dispatch, name, rocketList]);

  return (
    <Card
      sx={{
        maxWidth: 800,
        alignSelf: "center",
        margin: "auto",
      }}
    >
      {singleRocket.length > 0 && (
        <a
          href={singleRocket[0].wikipedia}
          style={{
            textDecoration: "none",
            color: "#A7A9AC",
            fontSize: "2rem",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={singleRocket[0].flickr_images[1]}
              alt="rocket"
              style={{ height: "65vh" }}
            />
            <CardContent style={{ backgroundColor: "#005288" }}>
              <Typography gutterBottom variant="h5" component="div">
                {singleRocket[0].name}
              </Typography>
              <Typography variant="body2" style={{ fontSize: "1.3rem" }}>
                {singleRocket[0].description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
      )}
    </Card>
  );
};

export default Rocket;
