import React from "react";

export default ({ submitHandler }) => {
    return (
        <form className="field has-addons" onSubmit={submitHandler}>
            <input className="input inputSettings" type="text" placeholder="Ingredients" />
            <button className="details-button">Add</button>
        </form>
    );
};
