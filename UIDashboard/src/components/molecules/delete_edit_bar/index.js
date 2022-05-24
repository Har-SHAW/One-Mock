import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from "./delete.png";
import EditIcon from "./edit.png";

const DeleteEditBar = (props) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                width: "94%",
            }}
        >
            <div
                className="delete_button"
                onClick={() => props.onDeleteClick()}
            >
                DELETE MOCK
                <img
                    style={{ marginLeft: "10px" }}
                    height="17px"
                    width="17px"
                    src={DeleteIcon}
                ></img>
            </div>
            <div className="edit_button" onClick={() => props.onEditClick()}>
                UPDATE MOCK
                <img
                    style={{ marginLeft: "10px" }}
                    height="17px"
                    width="17px"
                    src={EditIcon}
                ></img>
            </div>
        </div>
    );
};

DeleteEditBar.propTypes = {
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
};

export default DeleteEditBar;
