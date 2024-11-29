import { dev_bookmarks } from "./testbookmarks.js";

export {getTree, getNodeAndPath};

const getTree = async () => {
    return dev_bookmarks;
/*     const [ {children: favRoot} ]= await chrome.bookmarks.getTree();
    return favRoot;
 */
}

const getNode = async (nodeId, path = [], tree = null) => {
    if(nodeId === '0') {
        const rv = await getTree();
        rv.title = "/";
        return rv;
    }

    if(!tree) {
        tree  = (await getTree()).children;
    }

    for (const nd of tree) {
        if(nodeId === nd.id) {
            if(nd?.children) {
                path.push({id: nd.id, title: nd.title});
                return nd;
            }
        }

        if(nd?.children) {
            const didFind = await getNode(nodeId, path, nd?.children);
            
            if(didFind) {
                path.push({ id: nd.id, title: nd.title });
                return didFind;
            }
        }
    }

    return undefined;
    // return await chrome.bookmarks.getChildren(nodeId);
}

const getNodeAndPath = async (nodeId) => {
    const path = [];
    const node = await getNode(nodeId, path);

    if(node)
        path.push({ id: "0", title: "/" });

    return {node, path: path.reverse()};
}

// const {node, path} = await getNodeAndPath('4');
// console.log(node, path);
