/**
 *
 */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Css
import "./header.css";
import "./../styles/button.css";
// Custom hooks
import { useNetworkInformation } from "../hooks";

const Header = () => {
  const [network, setNetwork] = useNetworkInformation();

  useEffect(() => {}, []);

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav_items">
          <div className="header__nav_items_elm">
            <button className="btn">Home</button>
            <Link to="/">Home</Link>
          </div>
          <div className="header__nav_items_elm self-end align-middle">
            {network.effectiveType}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
