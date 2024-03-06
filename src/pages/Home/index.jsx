import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../layout/header";

const Home = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className="w-full h-full">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
    </div>
  );
};

export default Home;
