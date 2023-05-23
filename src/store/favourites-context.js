import { createContext } from "react";

const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
})

function FavouriteContextProvider(props){

    return <FavouriteContext.Provider>
        {props.children}
    </FavouriteContext.Provider>
}