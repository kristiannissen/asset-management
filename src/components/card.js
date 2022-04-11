/**
 *
 */
import React, { useEffect } from "react";
import "./card.css";
import "../styles/button.css";

const Card = ({ title, children }) => {
  return (
    <div className="card__outer">
      <div className="card__inner">
        {title !== "" && (
          <h5 className="text-xl" role="heading">
            {title}
          </h5>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
