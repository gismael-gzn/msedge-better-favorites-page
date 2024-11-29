import { BookmarksContext } from "./bookmarksContext"
import { getNodeAndPath, getTree } from "../functions/bookmarks";
import { useEffect, useReducer, useState } from "react";
import { bookmarksReducer } from "../reducers/bookmarksReducer";
import { bookmarks_init } from "../reducers/types";
import PropTypes from "prop-types";

/* 
Higher order component to provide info about:

favTree: the tree itself, has finished loading
route or path: builds the current path based on the nodeId in which the user is in
*/
export const BookmarksProvider = ({ children }) => {

  // move to custom hook
  const [nodeId, setCurrentNodeId] = useState('0');
  const [currentNode, setCurrentNode] = useState({});
  const [explorerPath, setExplorerPath] = useState();
  const [currentExplorerLoaded, setCurrentExplorerLoaded] = useState(false);


  const requestPathChange = (nodeId) => {
    setCurrentNodeId(nodeId);
  }

  const getNewNodeAndPath = async () => {
    setCurrentExplorerLoaded(false);
    const { node, path } = await getNodeAndPath(nodeId);
    setCurrentNode(node);
    setExplorerPath(path);
    setCurrentExplorerLoaded(true);
  }

  useEffect(() => {
    getNewNodeAndPath();
  }, [nodeId]);


  // move to custom hook
  const [favTreeLoaded, setFavTreeLoaded] = useState(false);
  const [favTree, dispatchFavTree] = useReducer(bookmarksReducer, {});

  const initializeFavTree = async () => {
    const rcvTree = await getTree();
    const initAction = { type: bookmarks_init, payload: rcvTree };
    dispatchFavTree(initAction);
    setFavTreeLoaded(true);
  }

  // Initialize the state
  useEffect(() => {
    initializeFavTree();
    getNewNodeAndPath();
  }, []);

  return (
    <BookmarksContext.Provider value={{
      favTree, favTreeLoaded, requestPathChange, currentNode, explorerPath, currentExplorerLoaded,
    }} >
      {children}
    </BookmarksContext.Provider>
  )
}

BookmarksProvider.propTypes = {
  children: PropTypes.object,
}
