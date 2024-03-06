import React from "react";
import { database } from "../../data/data";
import { Link } from "react-router-dom";
const Login = () => {
  const users = database.users;

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const user = users.find((user) => user.email === email);
    if (user) {
      if (user.password === password) {
        window.localStorage.setItem("user", JSON.stringify(user));
        alert(
          `User logged in successfully. Welcome ${user.name}! You are now logged in.`
        );
        window.location.href = "/home";
      } else {
        alert(
          `Password incorrect. Please enter the correct password for ${email}`
        );
      }
    } else {
      alert("User not found");
    }
  };
  return (
    <div className="w-96 h-auto flex justify-center items-center border-2 border-gray-400 rounded-md p-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-10 border-2 border-gray-300 rounded-md p-2 my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 border-2 border-gray-300 rounded-md p-2 my-2"
          />
          <button
            type="submit"
            className="w-full h-10 bg-blue-500 text-white rounded-md"
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
