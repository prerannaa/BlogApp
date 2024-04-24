
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost, updatePost } from "../services/ApiService";
import { Navigate } from "react-router-dom";

export default function EditBlog() {
  const { url } = useParams();
  const [post, setPost] = useState(null);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [goToHome, setGoToHome] = useState(false)


  useEffect(() => {
    getPost()
      .then((res) => {
        const foundPost = res.find((post) => post.url === decodeURIComponent(url));
        setPost(foundPost);
        setFormData({ title: foundPost.title, content: foundPost.content });
      })
      .catch((error) => console.error("Error fetching post data:", error));
  }, [url]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = { url: post.url, ...formData };
      await updatePost(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
    }
    setGoToHome(true);
    alert("Blog is edited!!");
  };

  if(goToHome){
    console.log("Home")
    return <Navigate to="/" />
  }

  return (
    <>
      <h1 className=" flex justify-center py-8 text-slate-950 text-2xl">Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mx-3 ">
        <ul>
          <li>
            <div>
                <h2>Title</h2>
            </div>
            <div>
            <input
              className="w-full h-8 shadow-lg border-2"
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
            />
            </div>
          </li>
          <li>
            <div>
            Content
            </div>
            <div>
            <input
              className="w-full h-20 shadow-lg border-2"
              type="text"
              name="content"
              required
              value={formData.content}
              onChange={handleChange}
            />
            </div>
          </li>
        </ul>

        </div>
        <div className="flex justify-center px-10 pt-10">
        <button
          type="submit"
          className="font-normal bg-gray-500 hover:bg-stone-900 text-white py-2 px-4 rounded-full"
        >
          EDIT
        </button>
        </div>
      </form>
    </>
  );
}
