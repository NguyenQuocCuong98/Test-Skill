import "./App.css";

import { Route, Routes } from "react-router-dom";

import CountryPage from "pages/Country/CountryPage";
import { FC } from "react";
import Home from "pages/Home/Home";
import TodoPage from "pages/Todo/Todopage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todo" element={<TodoPage />} />
      <Route path="country" element={<CountryPage />} />
    </Routes>
  );
};

export default App;
