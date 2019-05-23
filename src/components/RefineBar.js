import React from "react";

const RefineBar = ({ searchChange }) => {
  return (
    <div>
      <label>Refine search:</label>
      <input type="search" onChange={searchChange} />
    </div>
  );
};

export default RefineBar;
