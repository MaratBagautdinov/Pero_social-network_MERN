import css from './MyPosts.module.css'
import {useDispatch} from "react-redux";
import {DEL_POST} from "../../../../../../../social-app/social-app/src/redax/profileReducer.js";

export const PostItem = (props) => {
    let dispatch = useDispatch()
    function delPost() {
        dispatch(DEL_POST({postID: props.id, userId: props.userId, postOwn: props.postOwn}))
    }
    return (
        <div className={css.postItem}>
            <div className={css.postHeader}>
                <div className={css.postInfo}>
                    <div className={css.postInfoLogo}>
                        <img src={'/img/' + props.logo} alt={props.namePerson}/>
                    </div>
                    <div className={css.postInfoName}>
                        <p>{props.namePerson}</p>
                        <p className={css.postDate}>{props.date}</p>
                    </div>
                </div>
                <div className={css.postInterface}>
                    <span className={css.favorite}>
                        <p>{props.likes}</p>
                        <span
                            className="material-icons-outlined">favorite</span>
                    </span>
                    <img src={'/img/pen.svg'} alt="pen"/>
                    <img onClick={delPost} src={'/img/garbage.svg'} alt="garbage"/>
                </div>
            </div>
            <div className={css.postContent}>{props.content}</div>
        </div>
    )
}