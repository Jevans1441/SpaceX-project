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
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            textDecoration: "none",
            alignItems: "center",
            justifyContent: "center",
            height: "86vh",
          }}
        >
          {crewData.length &&
            crewData.map((crew) => (
              <ImageListItem
                key={crew.id}
                style={{
                  width: "300px",
                  height: "500px",
                }}
              >
                <img
                  src={`${crew.image}?w=248&fit=crop&auto=format`}
                  srcSet={`${crew.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={crew.name}
                  loading="lazy"
                />
                <a href={crew.wikipedia} className="crew-href">
                  <ImageListItemBar
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                    }}
                    title={crew.name}
                    position="below"
                  />
                </a>
              </ImageListItem>
            ))}
        </ImageList>
      }
    </>
  );
};
export default Crew;
