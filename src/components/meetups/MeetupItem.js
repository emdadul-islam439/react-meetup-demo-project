import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import FavouriteContext from "../../store/favourites-context";
import Card from "../ui/Card";

function MeetupItem(props) {
  const favouriteContext = useContext(FavouriteContext);

  const isFavourite = favouriteContext.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (isFavourite) {
      favouriteContext.removeFavoute(props.id);
    } else {
      favouriteContext.addFavourite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {isFavourite ? "Remove From Favourite" : "Add To Favourite"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
