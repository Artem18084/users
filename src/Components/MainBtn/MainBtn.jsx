import React from "react";
import { getUsers } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function MainBtn() {
  const dispatch = useDispatch();

  return (
    <Link to="/">
      <button
        onClick={() => dispatch(getUsers())}
        className="text-center text-orange-300 bg-teal-600 h-20 my-10 mx-auto  w-44 rounded-lg "
      >
        Show users
      </button>
    </Link>
  );
}
