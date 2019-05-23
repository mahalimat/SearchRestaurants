import React from "react";

const RefineBar = ({ searchChange }) => {
  return (
    <div>
      <label htmlFor="refineInput">Refine search:</label>
      <input
        id="refineInput"
        type="search"
        onChange={searchChange}
        aria-label="refine"
        aria-required="true"
        name="refine"
      />
    </div>
  );
};

export default RefineBar;
