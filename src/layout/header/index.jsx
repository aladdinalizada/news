import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-blue-500 text-white">
        <h1 className="font-bold text-2xl bg-transparent">
          {user.name} worlspace
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
              <Link to="/setting">Setting</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            window.localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-md active:bg-red-600 hover:bg-red-600 transition-all duration-200 ease-in-out"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
