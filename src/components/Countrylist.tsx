import "styles/CountryList.css";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { angleRight } from "components/font/FontGlobal";

const CountryList: FC = () => {
  return (
    <div className="countryList">
      <div className="countryList-wrapper">
        <div className="countryList-number">
          <p>2</p>
        </div>
        <div className="countryList-description">Country list</div>
      </div>
      <Link to="country">
        <div className="countryList-icon">
          <FontAwesomeIcon icon={angleRight} />
        </div>
      </Link>
    </div>
  );
};

export default CountryList;
