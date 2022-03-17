import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Dragons = () => {
  const dragonData = useSelector((state) => state.dragon);

  return (
    <>
      {
        <ImageList
          style={{
            overflow: "hidden",
            justifyContent: "center",
            margin: "40px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {dragonData.length &&
            dragonData.map((dragon) => (
              <ImageListItem
                key={dragon.id}
                style={{
                  width: "600px",
                  height: "600px",
                }}
              >
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
