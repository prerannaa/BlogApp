import React from "react";
import { useEffect, useState } from "react";
import { getPost } from "../services/ApiService";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let display = true;
    getPost().then((res) => {
      console.log("Response", res);
      setPosts(res);
      return () => (display = false);
    });
  }, []);

  return (
    <>
      <div
        className="h-32 w-full border-2 
                        flex items-center 
                        justify-center bg-purple-200 text-stone-700"
      >
        <p className="text-2xl"> Welcome to Blog Page!!!</p>
      </div>
      <div className="flex items-end justify-end py-4 px-12">
      <button class=" bg-gray-500 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded-full">
       Add blog  
      </button>
      </div>
      <div className="container w-100 mx-auto px-90">
        {posts.map((post) => {
          return (
            <ul>
              <div className="mb-8 border border-gray-200 rounded-lg shadow-md">
                <ul>
                <li className="text-xl font-bold py-4 px-6">
                  {post.title}
                </li>
                <li className="text-sm font-semibold text-gray-500 px-6 py-2 border-b border-gray-200">
                  Published Date: {post.published_date}
                </li>
                </ul>
                <li className="text-gray-700 px-6 py-4">{post.content}</li>
                <li className="text-blue-700 text-end text-decoration-line: underline text-sm px-6 py-2">
                  <a href="">Read More</a>
                </li>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
}
