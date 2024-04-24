import axios from "axios";

export function getPost(){
    return axios.get('http://127.0.0.1:8000/posts/')
    .then(res => {
        return res.data
    })
}

export function addPost(post){
    return axios.post('http://127.0.0.1:8000/posts/',
    {
        title: post.title.value,
        content: post.content.value,
    })
    .then(res => {
        return res.data
    })
}

export function updatePost(post) {
    const { url, title, content } = post;
    return axios.put( url, {
        title,
        content
    })
    .then(res => {
        return res.data;
    })
    .catch(error => {
        // Handle any errors here
        console.error('Error updating post:', error);
        throw new Error('Failed to update post');
    });
}

export function deletePost(url) {
    return axios.delete( url)
    .then(res => {
        return res.data;
    })
    .catch(error => {
        console.error('Error deleting', error);
    });
}

export const getOnePost = (url) => {
    const postId = url.split('/').pop();
    
    return axios.get('http://127.0.0.1:8000/posts')
      .then((response) => {
        const post = response.data.find(post => post.url === url);
        if (!post) {
          throw new Error('Post not found');
        }
        return post;
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  };