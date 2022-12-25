import React from "react";
import { useSelector } from "react-redux";
import MainBtn from "../MainBtn/MainBtn";
import Modal from "../Modal/Modal";
import UsersItem from "./UsersItem/UsersItem";

export default function UsersList() {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="flex flex-col items-center justify-center  w-[100vw] relative">
      <MainBtn />
      {users?.map((user, index) => (
        <UsersItem key={user.id} name={user.name} usersItemsId={user.id} />
      ))}

      <Modal />
    </div>
  );
}
