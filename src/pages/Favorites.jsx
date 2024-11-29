import { PathDisplay } from "../components/PathDisplay";
import { useContext } from "react";
import { BookmarksContext } from "../context/bookmarksContext";
import { CardVisualizer } from "../components/CardVisualizer";

export const Favorites = () => {
  const { currentNode, explorerPath, currentExplorerLoaded } = useContext(BookmarksContext);

  if (currentExplorerLoaded)
    return (
      <div className="h-full bg-stone-100">

        <PathDisplay pathArray={explorerPath} />
        <CardVisualizer currentNode={currentNode} />

      </div>
    )
}
