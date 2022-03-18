import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { NavLink, Outlet } from "react-router-dom";

const Rockets = () => {
  const rocketData = useSelector((state) => state.rocket);

  return (
    <>
      {
        <ImageList
          style={{
            margin: "20px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "auto",
            height: "80vh",
            marginTop: "20px",
            padding: "30px",
            justifyContent: "center",
          }}
        >
          {rocketData.length &&
            rocketData.map((rocket) => (
              <ImageListItem
                key={rocket.id}
                style={{
                  width: "500px",
                  height: "500px",
                }}
              >
                <img
                  src={`${rocket.flickr_images[0]}?w=248&fit=crop&auto=format`}
                  srcSet={`${rocket.flickr_images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={rocket.name}
                  loading="lazy"
                />
                {/* because this link is clicked from a page that has 'Rockets/all' in the URL */}
                {/* we have to give an absolute path, otherwise this would go to 'Rockets/all/Falcon1' */}
                {/* but with an absolute path, it goes to Rockets/Falcon1 */}
                <NavLink to={`/Rockets/${rocket.name.replace(/ /g, "")}`}>
                  <ImageListItemBar
                    style={{ textAlign: "center", color: "white" }}
                    title={rocket.name}
                    position="below"
                  />
                </NavLink>
              </ImageListItem>
            ))}
        </ImageList>
      }
      <Outlet />
    </>
  );
};

export default Rockets;
