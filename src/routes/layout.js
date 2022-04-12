/**
 *
 */
import React from "react";
import { Link, Outlet } from "react-router-dom";
// Custom styes
import "./../styles/header.css";
import "./../styles/button.css";
import { useNetworkInformation } from "../hooks";

const Layout = () => {
  const [network, setNetwork] = useNetworkInformation();

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__nav_items">
            <div className="header__nav_items_elm">
              <Link className="btn__primary" to="/">
                Home
              </Link>
            </div>
            <div className="header__nav_items_elm self-end align-middle">
              {network.effectiveType}
            </div>
          </div>
        </nav>
      </header>
      <main className="main__content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
