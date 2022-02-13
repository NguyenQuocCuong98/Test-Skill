import "styles/Header.css";

import { betteryFull, signal, wifi } from "components/font/FontGlobal";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header-time">9:00</div>
      <div className="header-list">
        <div className="header-list__sinal">
          <FontAwesomeIcon icon={signal} />
        </div>
        <div className="header-list__wifi">
          <FontAwesomeIcon icon={wifi} />
        </div>
        <div className="header-list__battery">
          <FontAwesomeIcon icon={betteryFull} />
        </div>
      </div>
    </div>
  );
};

export default Header;
