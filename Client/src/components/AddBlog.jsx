import React from "react";

export default function AddBlog(){
    return(
        <>
        <h1 className="text-stone-700 text-2xl">Add Blog</h1>
        <form action="">
            Title <input type="text" name="title" />
            Content <input type="text" name="content" />
        </form>
        </>
    )
}