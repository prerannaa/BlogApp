// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getPost } from "../services/ApiService";

// export default function EditBlog() {
//   const { url } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     getPost()
//       .then((res) => {
//         const foundPost = res.find((post) => post.url === decodeURIComponent(url));
//         setPost(foundPost);
//       })
//       .catch((error) => console.error("Error fetching post data:", error));
//   }, [url]);



//   return (
//     <>
//       <h1 className="text-stone-700 text-2xl">Edit Blog</h1>
//       <form onSubmit="">
//         <ul>
//           <li>
//             Title
//             <input
//               type="text"
//               name="title"
//               defaultValue={post.title}
//               // onChange={(e) => handleChange(e)}
//             />
//           </li>
//           <li>
//             Content
//             <input
//               type="text"
//               name="content"
//               defaultValue={post.content}
//               // onChange={(e) => handleChange(e)}
//             />
//           </li>
//         </ul>
//         <button
//           type="submit"
//           className="font-normal bg-gray-500 hover:bg-stone-900 text-white py-2 px-4 rounded-full"
//         >
//           EDIT
//         </button>
//       </form>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost, updatePost } from "../services/ApiService";

export default function EditBlog() {
  const { url } = useParams();
  const [post, setPost] = useState(null);
  const [formData, setFormData] = useState({ title: "", content: "" });

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
  };


  return (
    <>
      <h1 className="text-stone-700 text-2xl">Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            Title
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </li>
          <li>
            Content
            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button
          type="submit"
          className="font-normal bg-gray-500 hover:bg-stone-900 text-white py-2 px-4 rounded-full"
        >
          EDIT
        </button>
      </form>
    </>
  );
}
