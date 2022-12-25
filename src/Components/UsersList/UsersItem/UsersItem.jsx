import React, { useState } from "react";
import dotPng from "../../../images/dots.png";
import SelectMenu from "./SelectMenu/SelectMenu";
import { useDispatch } from "react-redux";
import { setUserId } from "../../../features/userId/userIdSlice";

export default function UsersItem(props) {
  const id = props.usersItemsId;
  const [userItems, setUserItems] = useState(false);

  const dispatch = useDispatch();

  const userItemIdUserItemToggle = () => {
    setUserItems(!userItems);
    dispatch(setUserId(id));
  };

  return (
    <p
      className="w-96 h-24 bg-red-500 mb-5 text-center rounded-xl   relative "
      key={props.key}
    >
      {props.name}
      <button
        onClick={() => userItemIdUserItemToggle()}
        // onFocus={() => }
        // onBlur = {()=> dispatch(setUserId(0))}
      >
        <img
          src={dotPng}
          alt="dots"
          className="absolute top-0 right-2 h-1/4 w-6 bg-red-500 rounded-xl "
        />
      </button>
      <SelectMenu setUserItems={setUserItems} userItems={userItems} />
    </p>
  );
}
