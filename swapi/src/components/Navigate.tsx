import * as React from "react";
import { Dispatch, FC, SetStateAction } from "react";

interface IProp {
  page: {
    next: string;
    previous: string;
  };
  onClick: Dispatch<SetStateAction<string>>;
}

const Navigate: FC<IProp> = ({ onClick, page }) => {
  return (
    <div className="menu">
      <button
        onClick={() => onClick(page.previous.slice(-1))}
        disabled={!page.previous}
        className="menu__button"
      >
        Previous
      </button>
      <button
        onClick={() => onClick(page.next.slice(-1))}
        disabled={!page.next}
        className="menu__button"
      >
        Next
      </button>
    </div>
  );
};

export default Navigate;
