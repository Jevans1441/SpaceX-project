import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { height } from "@mui/system";

const Dragons = () => {
  const dragonData = useSelector((state) => state.dragon);

  return (
    <>
      {
        <ImageList
          style={{
            margin: "auto",
            overflow: "hidden",
            marginTop: "20px",
            paddingBottom: "30px",
            height: "88vh",
          }}
        >
          {dragonData.length &&
            dragonData.map((dragon) => (
              <ImageListItem key={dragon.id}>
                <img
                  src={`${dragon.flickr_images[0]}?w=248&fit=crop&auto=format`}
                  srcSet={`${dragon.flickr_images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={dragon.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  style={{ textAlign: "center", color: "white" }}
                  title={dragon.name}
                  position="below"
                />
              </ImageListItem>
            ))}
        </ImageList>
      }
    </>
  );
};

export default Dragons;
