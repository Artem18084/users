import React from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../features/Modal/modalSlice";
import { getUserAlbums } from "../../../../features/UserAlbums/userAlbumsSlice";
import { Link } from "react-router-dom";

export default function UserAlbums(props) {
  const dispatch = useDispatch();
  const modalToggle = () => {
    dispatch(getUserAlbums());
    dispatch(setModal(true));
  };

  return (
    <Link to="/">
      <button
        className="text-sm"
        onFocus={() => modalToggle()}
        onBlur={() => props.setUserItems(false)}
      >
        {" "}
        User's albums
      </button>
    </Link>
  );
}
