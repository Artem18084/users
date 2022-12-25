import React from "react";

import UserPost from "../UserPosts/UserPost";
import UserAlbums from "../UserAlbums/UserAlbums";

export default function SelectMenu(props) {
  return (
    <nav
      className={`absolute top-6 right-1 border border-zinc-600   rounded-xl p-1 bg-gray-500 ${
        !props.userItems ? "hidden" : "flex flex-col items-start"
      }   `}
    >
      <UserAlbums
        setUserItems={props.setUserItems}
        userItems={props.userItems}
      />
      <UserPost />
    </nav>
  );
}
