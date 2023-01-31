import {InfoProfile} from "./InfoProfile/InfoProfile.jsx";
import {NewPost} from "./NewPost/NewPost.jsx";
import {MyPosts} from "./MyPosts/MyPosts.jsx";
import {useSelector} from "react-redux";

export const ProfileItem =(props)=>{
    let users = useSelector(state => state.profile._usersDB)
    let profileInfo = users.find((user) => user.id === Number(props.id))
    return(
        <>
            <InfoProfile profileInfo={profileInfo}/>
            <NewPost id={props.id}/>
            <MyPosts profileInfo={profileInfo}/>
        </>
    )
}