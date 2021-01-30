import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="App-note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteForeverIcon />
            </button>
        </div>
    );
}
export default Note;
