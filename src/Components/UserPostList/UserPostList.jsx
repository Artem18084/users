import React from "react";
import MainBtn from "../MainBtn/MainBtn";
import UserPostItems from "./UserPostItems/UserPostItems";

export default function UserPostList() {
  return (
    <main className="flex flex-col justify-center items-center" >
      <MainBtn />
      <UserPostItems />
    </main>
  );
}
