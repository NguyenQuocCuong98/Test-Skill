import "styles/Home.css";

import CountryList from "../../Countrylist";
import { FC } from "react";
import Header from "../../Header";
import Todolist from "../../Todolist";

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
