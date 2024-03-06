import React from "react";
import { Link } from "react-router-dom";
import { addUser, checkUser } from "../../auth/auth";
const Register = () => {
  const handleRegsiter = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const user = {
      name,
      email,
      password,
    };
    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      if (checkUser(email) === false) {
        alert("User already exists");
      } else {
        addUser(user);
        alert("User registered successfully");
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
      }
    }
  };
  return (
    <div className="w-96 h-auto flex justify-center items-center border-2 border-gray-400 rounded-md p-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">Register</h1>
        <form onSubmit={(e) => handleRegsiter(e)}>
          <input
            type="text"
            placeholder="Name"
            className="w-full h-10 border-2 border-gray-300 rounded-md p-2 my-2"
          />
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
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
