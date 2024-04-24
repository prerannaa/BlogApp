import React, { useState } from "react";
import { addPost } from "../services/ApiService";
import { Link, Navigate } from "react-router-dom";


export default function AddBlog() {
  // Define state variables to hold form data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [goToHome, setGoToHome] = useState(false)

  const handleChange = (e) => {
    const newdata = { ...formData };
    newdata[e.target.name] = e.target.value;
    setFormData(newdata);
  };

  const handleSubmit = (e) => {
    addPost(e.target).then((res) => {
      setFormData(res);
    });    
    setGoToHome(true);
    alert("Blog is posted!!");
  };

  if(goToHome){
    console.log("Home")
    return <Navigate to="/" />
  }

  return (
    <>
      <h1 className="flex justify-center py-8 text-slate-950 text-2xl">
        Add Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mx-3">
          <ul>
            <li>
              <div>
                <h2>Title</h2>
              </div>
              <div >
              <input
              className="w-full h-8 shadow-lg border-2"
                type="text"
                name="title"
                placeholder="Title Here..."
                required
                value={formData.title}
                onChange={(e) => handleChange(e)}
              />
              </div>
            </li>
            <li>
              <div>Content</div>
              <input              
              className="w-full h-20 shadow-lg border-2"
                type="text"
                name="content"
                placeholder="Content Here..."
                required
                value={formData.content}
                onChange={(e) => handleChange(e)}
              />
            </li>
          </ul>
        </div>
        <div className="flex justify-center px-10 pt-10">
          <button
            type="submit"
            className="font-normal bg-gray-500 hover:bg-stone-900 text-white py-2 px-4 rounded-full"
          >
            ADD
          </button>
        </div>
      </form>
    </>
  );
}
