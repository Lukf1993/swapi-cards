import React, { FC } from "react";

interface IPorps {
  loadPage: (bool: boolean) => void;
}
const Menu: FC<IPorps> = ({ loadPage }) => {
  return (
    <div className="menu">
      <span onClick={() => loadPage(true)} className="menu__button">
        Pokaż ulubione
      </span>
      <span onClick={() => loadPage(false)} className="menu__button">
        Wszystkie Karty
      </span>
    </div>
  );
};

export default Menu;
