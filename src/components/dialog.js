/**
 *
 */
import { createPortal } from "react-dom";
import React, { useEffect, useState, useRef } from "react";
// Component styles
import "./dialog.css";
import "./../styles/button.css";

const Dialog = () => {
  const dialogElm = useRef(null);

  const markup = () => {
    return (
      <div className="dialog" role="dialog" ref={dialogElm}>
        <div className="dialog__content">
          <button className="btn">Install</button>
        </div>
      </div>
    );
  };

  return createPortal(markup(), document.getElementById("app-dialog"));
};

export default Dialog;
