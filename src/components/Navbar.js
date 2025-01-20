import React from "react";
import SidebarData from "./SidebarData";
// import Upload from "./Upload";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="nav-menu">
          <SidebarData />
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
