import PropTypes from "prop-types"

import placeholder from '../assets/placeholder.webp'
import folderPreview from '../assets/folder-preview.svg'
import { useContext } from "react";
import { BookmarksContext } from "../context/bookmarksContext";
// import { useState } from "react";

const setImagePreview = (id, hasChildren, url) => {
    if(hasChildren)
        return folderPreview;
    else {
        const urlObj = new URL(url);
        const rv = `https://${urlObj.hostname}/favicon.ico`;
        console.log(rv);
        return rv;
        // return placeholder;
    }
}

export const FavoriteCard = ({id, title, url, children }) => {

    // const [favTitle, setFavTitle] = useState(title);

    // just to silence warnings
    // setFavTitle(title);

    const { requestPathChange } = useContext(BookmarksContext);

    const navigateIfFolder = () => children ? () => requestPathChange(id): ()=>{};

    return (
        <article className="lg:w-1/6 bg-indigo-100 p-2 rounded-lg m-4">
            <a onClick={navigateIfFolder()} href={url} target="_blank" className="cursor-pointer">
                <img className="rounded-lg" src={setImagePreview(null, children, url)} alt="" />
                <h3 className="text-blue-900 text-lg font-medium">{title}</h3>
            </a>
        </article>
    )
}

FavoriteCard.propTypes = {
    previewImage: PropTypes.object,
    title: PropTypes.string.isRequired,
}
