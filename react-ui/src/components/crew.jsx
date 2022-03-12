import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Crew = () => {
  const crewData = useSelector((state) => state.crew);

  return (
    <>
      {
        <ImageList
          style={{
            margin: "auto",
            width: "50%",
            height: "89vh",
          }}
        >
          {crewData.length &&
            crewData.map((crew) => (
              <ImageListItem key={crew.id}>
                <img
                  src={`${crew.image}?w=248&fit=crop&auto=format`}
                  srcSet={`${crew.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={crew.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  style={{ textAlign: "center" }}
                  title={crew.name}
                  position="below"
                />
              </ImageListItem>
            ))}
        </ImageList>
      }
    </>
  );
};
export default Crew;
