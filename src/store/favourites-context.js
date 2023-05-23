import { createContext } from "react";

const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
})

function FavouriteContextProvider(props){
    const constext = {}

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}