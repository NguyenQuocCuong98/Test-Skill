import "./Header.css";

import {
  faBatteryFull,
  faSignal,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

const Header: FC = () => {
  const faPropIcon = faSignal as IconProp;
  const faPropIcon1 = faWifi as IconProp;
  const faPropIcon2 = faBatteryFull as IconProp;
  return (
    <div className="header">
      <div className="header-time">9:00</div>
      <div className="header-list">
        <div className="header-list__sinal">
          <FontAwesomeIcon icon={faPropIcon} />
        </div>
        <div className="header-list__wifi">
          <FontAwesomeIcon icon={faPropIcon1} />
        </div>
        <div className="header-list__battery">
          <FontAwesomeIcon icon={faPropIcon2} />
        </div>
      </div>
    </div>
  );
};

export default Header;
