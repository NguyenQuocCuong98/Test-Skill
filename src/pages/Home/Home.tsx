import "styles/Home.css";

import CountryList from "components/Countrylist";
import { FC } from "react";
import Header from "components/Header";
import Todolist from "components/Todolist";

const Home: FC = () => {
  return (
    <section className="Home">
      <Header />
      <div className="Home-title">
        <h2>Eastplayers Test</h2>
      </div>
      <Todolist />
      <CountryList />
    </section>
  );
};

export default Home;
