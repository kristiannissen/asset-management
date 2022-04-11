/**
 *
 *
 */
import React from "react";
import "./spinner.css";

const Spinner = ({ show }) => {
  return (
    <>
      {show === true && (
        <div className={`spinner`}>
          <span className="spinner__label">Loading</span>
        </div>
      )}
    </>
  );
};

export default Spinner;
