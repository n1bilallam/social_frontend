import React from "react";
import NavBar from "../Headers/Navbar";
/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};

export default Layout;
