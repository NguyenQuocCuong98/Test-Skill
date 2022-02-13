import "./App.css";

import { Route, Routes } from "react-router-dom";

import Countrylist from "components/pages/Country/Countrylist";
import { FC } from "react";
import Home from "./components/pages/Home/Home";
import Todolist from "components/Todo/Todopage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todo" element={<Todolist />} />
      <Route path="country" element={<Countrylist />} />
    </Routes>
  );
};

export default App;
