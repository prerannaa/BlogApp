import React from "react";
import { Link } from "react-router-dom";
import { getPost,deletePost } from "../services/ApiService";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getPost().then((res) => {
      if (isMounted) {
        console.log("res", posts)
        setPosts(res);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);



  const handleEditClick = (post) => {
    console.log("Editing post:", post);
  };

  const handleDeleteBtn = async (post) => {
    try {
      await deletePost(post.url); 
      setPosts(posts.filter((p) => p.url !== post.url)); 
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <div className="h-32 w-full border-2 flex items-center justify-center bg-purple-200 text-stone-700">
        <p className="text-2xl"> Welcome to Blog Page!!!</p>
      </div>
      <div className="flex items-end justify-end py-4 px-12">
        <Link to="/addblog">
          <button className="bg-gray-500 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded-full">
            Add blog
          </button>
        </Link>
      </div>
      <div className="container w-100 mx-auto px-90">
        {posts.map((post) => (
          <ul key={post.url}>
            <div className="mb-8 border border-gray-200 rounded-lg shadow-md">
              <ul>
                <li className="text-xl font-bold py-4 px-6">{post.title}</li>
                <li className="text-sm font-semibold text-gray-500 px-6 py-2 border-b border-gray-200">
                  Published Date: {post.published_date}
                </li>
              </ul>
              <li className="text-gray-700 px-6 py-4">{post.content}</li>
              <li className="flex gap-3 text-gray-700 px-6 py-4">
                <Link to={`/editblog/${encodeURIComponent(post.url)}`}>
                  <button className="bg-gray-500 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleEditClick(post)}
                  >
                    Edit
                  </button>
                </Link>
                <button className="bg-gray-500 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleDeleteBtn(post)} 
                >
                  Delete
                </button>
                {/* <p className="flex justify-end items-end text-blue-700 text-end text-decoration-line: underline text-sm px-6 py-2">
                  <a href="">Read More</a>
                </p> */}
              </li>
            </div>
          </ul>
        ))}
      </div>
      {/* <div className='container'>
      <Post posts={currentPosts} loading={loading} />
      <Pagination length={posts.length} postsPerPage={postsPerPge} handlePagination={handlePagination} currentPage={currentPage} />
    </div> */}
    </>
  );
}

