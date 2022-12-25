import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { getUserPosts } from "../../../../features/userPosts/userPostsSlice";

export default function UserPost() {
  const dispatch = useDispatch();
  return (
    <Link to="/user'sPosts">
      <button onClick={() => dispatch(getUserPosts())} className="text-sm">
        User'sPost
      </button>
    </Link>
  );
}
