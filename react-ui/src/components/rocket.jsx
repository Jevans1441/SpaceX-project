import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Rockets = () => {
  const rocketData = useSelector((state) => state.rocket);

  return (
    <>
      {
        <ImageList
          style={{
            margin: "auto",
            height: "80vh",
            marginTop: "20px",
            padding: "30px",
            width: "80vw",
          }}
        >
          {rocketData.length &&
            rocketData.map((rocket) => (
              <ImageListItem key={rocket.id}>
                <img
                  src={`${rocket.flickr_images[0]}?w=248&fit=crop&auto=format`}
                  srcSet={`${rocket.flickr_images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={rocket.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  style={{ textAlign: "center", color: "white" }}
                  title={rocket.name}
                  position="below"
                />
              </ImageListItem>
            ))}
        </ImageList>
      }
    </>
  );
};

export default Rockets;
