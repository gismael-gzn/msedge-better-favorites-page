import { useContext } from "react";
import { NodeList } from "./NodeList";
import { BookmarksContext } from "../context/bookmarksContext";

export const FavRoot = () => {
    const { favTree, favTreeLoaded } = useContext(BookmarksContext);
    if (favTreeLoaded) {
        return (<NodeList childs={favTree.children} />)
    }
    else {
        return (
            <p>Cargando ...</p>
        )
    }
}