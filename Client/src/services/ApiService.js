import axios from "axios";

export function getPost(){
    return axios.get('http://127.0.0.1:8000/posts/')
    .then(res => {
        return res.data
    })
}