import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";

import folderOpen from "/src/assets/folder-open.svg"
import folderClosed from "/src/assets/folder-closed.svg"
import { BookmarksContext } from "../context/bookmarksContext";

const setFolderIcon = (isCollapsed) => {
    return isCollapsed? folderClosed: folderOpen;
}

// const setStyle = (isActive) => `ml-2 text-left text-nowrap cursor-default ${isActive? "bg-slate-300": ""}`

const NodeElement = ({ parentId, id, title, children = null, parentHeightAdder, indentation}) => {

    const { requestPathChange } = useContext(BookmarksContext);

    const collapsedContent = useRef();
    const [isCollapsed, setCollapsed] = useState(true);
    const [height, setHeight] = useState(0);

    const toggleCollapse = () => {
        setCollapsed(!isCollapsed);
    }

    // const unCollapseOnlyIfCollapsed = () => {
    //     if(isCollapsed == true)
    //         setCollapsed(false);
    // }

    // const conditionalCollapse_gotoNodeId = () => {
    //     if (isCollapsed == true) {
    //         setCollapsed(false);
    //         requestPathChange(id);
    //     }
    // }

    useEffect(() => {
        if (isCollapsed) {
            parentHeightAdder(-height);
            setHeight(0);
        }
        else {
            const thisHeight = collapsedContent.current.scrollHeight;
            parentHeightAdder(thisHeight);
            setHeight(thisHeight);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCollapsed]);

    const addHeightAsParent = (adding) => {
        parentHeightAdder(adding);
        setHeight(height + adding);
    }

    if(children)
    return (
        <li className="text-xl" key={`${parentId}/${id}`} id={`${id}`}>

            <div className="flex flex-row py-1 sticky" title={title}>
                <button type="button" title="Alternar colapsado" onClick={toggleCollapse}>
                    <img className="icon-32" src={setFolderIcon(isCollapsed)} alt="" />
                </button>

                <button className="ml-2 text-left text-nowrap cursor-default"
                    onClick={ () => requestPathChange(id) } >
                    {title}
                </button>
            </div>

            <div className="collapse-container"
            style={{
                height: `${height}px`,
                overflow: 'hidden',
                marginLeft: `${indentation}rem`
            }} ref={collapsedContent}>
            {children?
                (<NodeList childs={children} parentHeightAdder={addHeightAsParent} indentation={indentation+1}/>): undefined }
            </div>
        </li>
    )
}

export const NodeList = ({ childs = [], parentHeightAdder=()=>{}, indentation = 1 }) => {
    return (
        <ul>
            {childs.map((e) => <NodeElement key={`${e.parentId}${e.id}`} {...e} parentHeightAdder={parentHeightAdder} indentation={indentation}/>)}
        </ul>
    )
}

NodeElement.propTypes = {
    parentId: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
    parentHeightAdder: PropTypes.func,
    indentation: PropTypes.number,
};

NodeList.propTypes = {
    childs: PropTypes.array,
    parentHeightAdder: PropTypes.func,
    indentation: PropTypes.number,
}
