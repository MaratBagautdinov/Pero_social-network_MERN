import css from './MyPosts.module.css'
import {PostItem} from "./PostItem.jsx";
import {useSelector} from "react-redux";

export const MyPosts = (props) => {
    let USER_POSTS = []
    let user = props.profileInfo
    let posts = useSelector(state => state.profile._postsDB)
    user.posts.map(postId => {
        let post = posts.find(postItem => postItem.id === postId)
        return USER_POSTS.push(post)
    }) // [{id, namePerson, logo, postOwn, date, time, content}{}{}]

    return (
        <div className={css.MyPosts}>
            {USER_POSTS.map((p)=> <PostItem
                id={p.id}
                key={p.id}
                namePerson={p.namePerson}
                logo={p.logo}
                postOwn={p.postOwn}
                date={p.date}
                time={p.time}
                content={p.content}
                likes={p.likes}
                userId={user.id}
            />)}
        </div>
    )
}