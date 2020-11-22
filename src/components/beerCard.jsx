import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "auto",
    maxHeight: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    width: "60px",
    height: "150px",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

const BeerCard = ({ key, description, image, name, deleteItem }) => {
  const classes = useStyles();
  const favData = { id: name, descp: description, img: image };
  const [color, setColor] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem(favData.id) != null) {
      setColor("red");
    }
  }, []);
  const favoriteItem = () => {
    if (color === "red") {
      setColor("");
      JSON.stringify(localStorage.removeItem(favData.id));
    } else {
      setColor("red");
      localStorage.setItem(favData.id, JSON.stringify(favData));
    }
  };
  const onClick = (key) => {
    deleteItem(key);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <img
            alt="example"
            src={image}
            aria-label="recipe"
            className={classes.avatar}
          ></img>
        }
        title={name}
        subheader={description}
      />
      <Divider variant="middle" />
      <CardActions disableSpacing className={classes.footer}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: color }} onClick={favoriteItem} />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton>
          <EditIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton onClick={() => onClick(key)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default React.memo(BeerCard);
