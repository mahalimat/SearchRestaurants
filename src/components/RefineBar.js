import React from "react";
import "./App.css";

const RefineBar = ({ refineChange }) => {
  return (
    <div className="form-row input">
      <label htmlFor="refineInput">Refine search:</label>
      <input
        id="refineInput"
        type="search"
        onChange={refineChange}
        aria-label="refine"
        aria-required="true"
        name="refine"
        placeholder="name, address, or area"
      />
    </div>
  );
};

export default RefineBar;
