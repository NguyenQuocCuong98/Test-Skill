import "./Home.css";

import { FC, useState } from "react";

import CountryList from "./Countrylist";
import Header from "./Header";
import Todolist from "./Todolist";

const Home: FC = () => {
  return (
    <div className="Home">
      <div className="Home-wrapper">
        <Header />
        <div className="Home-title">
          <h2>Eastplayers Test</h2>
        </div>
        <Todolist />
        <CountryList />
      </div>
    </div>
  );
};

export default Home;
