import React from "react";
import { changePassword } from "../../data/data";
const Setting = () => {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  console.log(userData);
  const changePass = (e) => {
    e.preventDefault();
    const pass = e.target.password.value;
    if (pass) {
      const user = {
        name: "John",
        email: userData.email,
        password: pass,
      };
      changePassword(user);
      // change only password
      window.localStorage.setItem("user", JSON.stringify(user));
      alert("Password Changed Successfully");
      console.log(user);
      //clear input
      e.target.password.value = "";
      window.location.reload();
    } else {
      alert("Please Enter Password");
    }
  };
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      {/* <div className="w-1/3 h-full bg-white shadow-lg rounded-lg p-8"> */}
      <h1 className="text-2xl font-bold text-center mb-8">Setting</h1>
      <div className="flex flex-col gap-3 justify-center p-3 border-2 rounded-lg shadow-lg max-w-96 w-full">
        <h3>Current User Data</h3>
        <span className="font-bold">
          Name: {""} {userData.name}
        </span>{" "}
        <span className="font-bold">
          Email: {""} {userData.email}
        </span>
        <span className="font-bold">
          Password: {""} {userData.password}
        </span>
        <h3 className="mt-4">Change Password</h3>
        <form
          onSubmit={(e) => {
            changePass(e);
          }}
          className="w-full flex flex-col gap-3"
        >
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            className="w-full p-2 border-2 rounded-lg"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-lg"
          >
            Change Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default Setting;
