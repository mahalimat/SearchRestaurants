import React from "react";

const RefineBar = ({ refineChange }) => {
  return (
    <div>
      <label htmlFor="refineInput">Refine search:</label>
      <input
        id="refineInput"
        type="search"
        onChange={refineChange}
        aria-label="refine"
        aria-required="true"
        name="refine"
      />
    </div>
  );
};

export default RefineBar;
