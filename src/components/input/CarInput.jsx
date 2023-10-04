import React from "react";
import { BsSearch } from "react-icons/bs";

export const CarInput = (props) => {
  return (
    <div>
      <div className="field">
        <input
          type="text"
          value={props.value}
          onChange={props.onchangehandler}
          placeholder="search"
          className="input_fiels"
        ></input>
        <button onClick={props.onClick} className="search_button ">
          <BsSearch />
        </button>{" "}
      </div>
    </div>
  );
};
