import PropTypes from "prop-types";
import { FavoriteCard } from "./FavoriteCard";

export const CardVisualizer = ({ currentNode }) => {

    return (
        <div className="m-4">
            
            <h2 className="text-blue-900 text-5xl font-bold"> {currentNode.title} </h2>
            <hr className="mb-10 border-solid border-2 border-indigo-400" />

            <div className="flex flex-row text-center flex-wrap">
                {currentNode.children.map((e) => <FavoriteCard key={e.id} {...e} />)}
            </div>

        </div>
    )
}

CardVisualizer.propTypes = {
    currentNode: PropTypes.object
}
