import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="col">
        <nav>
          <h1>Do Your Thng.</h1><br/>
          {/* <h2>All tasks</h2>    */}
        </nav>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create"> Create</Link>
      </div>
    </div>
  );
};

export default Navbar;
