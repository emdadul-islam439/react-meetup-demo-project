import { useContext } from "react";

import FavouriteContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favouriteContext = useContext(FavouriteContext);
  let content;
  if (favouriteContext.totalFavourites === 0) {
    content = <p>No Favourites Found!</p>;
  } else {
    content = <MeetupList meetups={favouriteContext.favourites} />;
  }
  return (
    <section>
      <h1>All Favourite Meetups</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
