import css from './NewPost.module.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_POST} from "../../../../../../../social-app/social-app/src/redax/profileReducer.js";
export const NewPost = () =>{
    const [content, setContent] = useState()
    let dispatch = useDispatch()
    const addPost = () =>{
        dispatch(ADD_POST(content))
        setContent('')
    }
    return(
    <div className={css.NewPost}>
        <div className={css.inputCover}>
            <textarea
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write new post..."/>
            <div className={css.NewPostInterface}>
                <div>
                    <img src={'/img/chain.svg'} alt="chain"/>
                    <img src={'/img/private.svg'} alt="chain"/>
                </div>
                <button
                    onClick={addPost}
                >Send</button>
            </div>
        </div>
    </div>
    )
}
