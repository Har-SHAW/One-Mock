import React, { PropTypes } from "react";

const DropDown = (props) => {
    function toggle() {
        let drop = document.getElementById("drop_content_" + props.id);
        let titleShow = document.getElementById("drop_title_show_" + props.id);
        let titleHide = document.getElementById("drop_title_hide_" + props.id);
        if (drop.className == "show") {
            drop.className = "hide";
            drop.style = "display: none";
            titleShow.style = "display: flex";
            titleHide.style = "display: none";
        } else {
            drop.className = "show";
            drop.style = "display: inline-block";
            titleShow.style = "display: none";
            titleHide.style = "display: flex";
        }
    }
    return (
        <div
            className="my-2.5 text-gray-700"
            style={{ width: props.width, userSelect: "none" }}
        >
            <div className="cursor-pointer" onClick={toggle}>
                <div
                    id={"drop_title_show_" + props.id}
                    className="flex border border-green-500 border-solid"
                >
                    <div className="text-white bg-green-500 text-center py-2.5 font-bold w-24">
                        SHOW
                    </div>
                    <div className="w-5"></div>
                    <div className="p-2.5">{props.title}</div>
                </div>
                <div
                    id={"drop_title_hide_" + props.id}
                    style={{ display: "none" }}
                    className="flex border border-red-500 border-solid"
                >
                    <div className="text-white bg-red-500 text-center w-24 py-2.5 font-bold">
                        HIDE
                    </div>
                    <div className="w-5"></div>
                    <div className="p-2.5">{props.title}</div>
                </div>
            </div>
            <div
                id={"drop_content_" + props.id}
                className="hide"
                style={{ display: "none" }}
            >
                {props.children}
            </div>
        </div>
    );
};

DropDown.propTypes = {};

export default DropDown;
