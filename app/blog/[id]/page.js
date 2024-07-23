import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Profile = async () => {
  const data = await getData();
  console.log("Data:", data);
  return (
    <>
      {data.map((post, i) => (
        <div key={i} className="mt-4 text-center">
          <h1 className="font-bold fs-2">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Profile;
