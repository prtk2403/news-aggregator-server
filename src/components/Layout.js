import React from "react";
import { Navbar } from "./NavBar.js";
const Layout = (props) => {
  return (
    <div className="layout flex">
      <div className="navbar w-full">
        <Navbar />
      </div>

      {/* <div className=" flex justify-end w-full h-10 mx-5 mt-5 "> */}
        {/* <div className="header h-20 w-full bg-red-500">
          header */}
          {/* <Link to="/logout">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Log Out
          </button>
          </Link> */}
          {/* <div>
          </div>
          </div>
          <div className="content">
            <h1>{props.chidren}</h1>
          </div> */}
      </div>
    // </div>
  );
};

export default Layout;
