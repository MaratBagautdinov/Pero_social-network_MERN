import axios from "axios";

const getPosts = async (userId:string) => {
    const posts = await axios.get(`/api/posts/${String(userId)}`)
    return posts.data
}

const postsService = {
    getPosts
}

export default postsService