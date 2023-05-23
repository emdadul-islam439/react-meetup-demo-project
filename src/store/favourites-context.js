import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
})

function FavouriteContextProvider(props){
    const [userFavourites, setUserFavourites] = useState([])
    const context = {
        favourites: userFavourites,
        totalFavourites: favourites.length,
    }

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}