import PropTypes from "prop-types"
import { useContext } from "react"
// import { NavLink } from "react-router-dom"
import { BookmarksContext } from "../context/bookmarksContext"

const PathMember = ({ id, title }) => {

    const { requestPathChange } = useContext(BookmarksContext);

    return (
        <li>
            {/* <NavLink to={id} className={"bg-slate-700 p-1 rounded-lg"} > {title} </NavLink> */}
            <button onClick={() => requestPathChange(id)} className="bg-slate-700 p-1 m-2 rounded-lg">
                {title} 
            </button>
            <span> {">"} </span>
        </li>
    )
}

export const PathDisplay = ({ pathArray }) => {
    return (
        <nav className="h-32 bg-slate-900 text-slate-50 flex flex-row">
            <ol className="crumbs text-md">
                {pathArray.map( (e) => <PathMember key={e.id} {...e} /> )}
            </ol>
        </nav>
    )
}

PathDisplay.propTypes = {
    pathArray: PropTypes.array.isRequired
}

PathMember.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
}
