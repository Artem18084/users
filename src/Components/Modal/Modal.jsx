import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../features/Modal/modalSlice";
import { setUserId } from "../../features/userId/userIdSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const userAlbums = useSelector((state) => state.userAlbums.userAlbums);

  const userId = useSelector((state) => state.userId.userId);
  console.log("userAlbums", userAlbums);

  const modal = useSelector((state) => state.modal.modal);
  const modalDisactiveCrealItems = () => {
    dispatch(setModal(false));
    dispatch(setUserId(0));
  };

  return (
    <section
      className={`absolute top-0 right-0 w-[100vw] h-full justify-center  bg-black opacity-80 ${
        modal ? "flex" : "hidden"
      }  `}
    >
      <article className="w-1/3  bg-slate-200  mt-[25vh] h-1/3 rounded-lg relative p-2">
        {userAlbums
          ?.filter((album) => album.userId === userId)
          .map((item) => (
            <p key={item.userId} className="">
              {item.id + ")"}{ item.title}
            </p>
          ))}
        <button
          onClick={() => modalDisactiveCrealItems()}
          className="w-5 h-5 bg-black absolute top-1 right-1"
        ></button>
      </article>
    </section>
  );
}

// зробити тогл між кнопкою 'х'
