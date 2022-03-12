import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Crew = () => {
  const crewData = useSelector((state) => state.crew);

  return (
    <>
      {
        <ImageList className="rocketImages" sx={{ width: 800 }}>
          {rocketData.length &&
            rocketData.map((rocket) => (
              <ImageListItem key={rocket.id}>
                <img
                  src={`${rocket.flickr_images[0]}?w=248&fit=crop&auto=format`}
                  srcSet={`${rocket.flickr_images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={rocket.name}
                  loading="lazy"
                />
                <ImageListItemBar title={rocket.name} position="below" />
              </ImageListItem>
            ))}
        </ImageList>
      }
    </>
  );
};
export default Crew;
