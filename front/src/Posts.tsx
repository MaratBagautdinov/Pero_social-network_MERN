import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "./store/posts/postsSlice";


// @ts-ignore
const Posts = ({user}) => {
    // const dispatch = useDispatch()
    // // @ts-ignore
    // const {posts} = useSelector((state) => state.posts)
    // useEffect(() => {
    //     return () => {
    //         // @ts-ignore
    //         dispatch(getPosts(user._id))
    //     };
    // }, [dispatch]);

    console.log(user)
    const name = "user.user.name"
    return (
        <div className="App">
            <h2>{name}</h2>
            {/*{// @ts-ignore*/}
            {/*    posts.map(p=> <p>{p.content}</p>)}*/}
        </div>
    );
}
export default Posts;
