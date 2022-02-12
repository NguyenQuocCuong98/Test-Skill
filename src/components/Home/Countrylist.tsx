import "./Countrylist.css";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const countryList: FC = () => {
  const faPropIcon = faAngleRight as IconProp;
  return (
    <div className="countryList">
      <div className="countryList-wrapper">
        <div className="countryList-number">
          <p>2</p>
        </div>
        <div className="countryList-description">Country list</div>
      </div>
      <div className="countryList-icon">
        <FontAwesomeIcon icon={faPropIcon} />
      </div>
    </div>
  );
};

export default countryList;
