import { ChangeEvent, useEffect, useRef, useState } from "react";
import { angleLeft, search } from "components/font/FontGlobal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "components/Header";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

const CountryPage: React.FC = () => {
  const [searchs, setSearch] = useState<Array<Country>>([]);
  const [searchName, setSearchName] = useState<string>("");
  const typingTimeoutRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loaderSearch = async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${searchName}`
      );
      console.log(response.data);
      setSearch(response.data);
      setIsLoading(false);
    };
    loaderSearch();
  }, [searchName]);

  const handlerSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchName(value);

    if (typingTimeoutRef.current.value) {
      clearTimeout(typingTimeoutRef.current.value);
    }

    typingTimeoutRef.current.value = setTimeout(() => {
      searchName: value;
    }, 500);
  };

  return (
    <section>
      <Header />
      <div className="todo-container">
        <Link to="/">
          <div className="todo-icon">
            <FontAwesomeIcon icon={angleLeft} />
          </div>
        </Link>
        <h3>Country list</h3>
      </div>
      <form>
        <input
          className="newTodo-input"
          type="text"
          placeholder="Search Country..."
          value={searchName}
          onChange={handlerSearchChange}
        />
        <button type="submit">
          <FontAwesomeIcon icon={search} />
        </button>
      </form>
      {searchs
        .slice(0, 10)
        .filter((value) => {
          if (searchName === "") {
            return value;
          } else if (
            value.name.common.toLowerCase().includes(searchName.toLowerCase())
          ) {
            return value;
          }
        })
        .map((val, key) => {
          return (
            <ul key={key}>
              <li className="country-items">
                {console.log(val.name.common)}
                {val.name.common}
              </li>
            </ul>
          );
        })}
    </section>
  );
};

export default CountryPage;
