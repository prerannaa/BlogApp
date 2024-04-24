import React, { useState } from "react";
import { addPost } from "../services/ApiService";

export default function AddBlog() {
  // Define state variables to hold form data
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const newdata ={...formData}
    newdata[e.target.name] = e.target.value
    setFormData(newdata)
  };

  const handleSubmit = (e) => {
    addPost(e.target)
    .then(res => {
      setFormData(res)
    })
  };

  return (
    <>
      <h1 className="text-stone-700 text-2xl">Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            Title
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </li>
          <li>
            Content
            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={(e) => handleChange(e)}
            />
          </li>
        </ul>
        <button
          type="submit"
          className="font-normal bg-gray-500 hover:bg-stone-900 text-white py-2 px-4 rounded-full"
        >
          ADD
        </button>
      </form>
    </>
  );
}
