import React from "react";
import { useSelector } from "react-redux";

export default function UserPostItems() {
  const userId = useSelector((state) => state.userId.userId);
  const userPosts = useSelector((state) => state.userPosts.userPosts);
  const filterAccordingToId = userPosts.filter(
    (item) => item.userId === userId
  );
  console.log("filtered", filterAccordingToId);
  return (
    <section className="w-1/2">
      {filterAccordingToId.map((item, index) => (
        <article className="mb-2 ">
          <h3 className="bg-gray-300 capitalize">
            {index + 1 + ") "}
            {item.title}
          </h3>{" "}
          <p className="bg-red-500">{' "' + item.body + '"'}</p>
        </article>
      ))}
    </section>
  );
}
