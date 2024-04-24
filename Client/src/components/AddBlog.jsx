import React, { useState } from "react";
import { addPost } from "../services/ApiService";
import { Link, Navigate } from "react-router-dom";

export default function AddBlog() {
  // Define state variables to hold form data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [goToHome, setGoToHome] = useState(false);

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

  if (goToHome) {
    console.log("Home");
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1 className="flex justify-center py-8 text-slate-950 text-2xl font-bold">
        ADD BLOG
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mx-3">
          <ul>
            <li className="py-10">
              <div className="text-slate-500 font-bold">
                <h2>TITLE</h2>
              </div>
              <div>
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
              <div className="text-slate-500 font-bold">CONTENT</div>
              <textarea
                id="content"
                name="content"
                required
                rows="10"
                cols="100"
                placeholder="Content Here..."
                className=" shadow-lg border-2"
                value={formData.content}
                onChange={(e) => handleChange(e)}
              ></textarea>
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
