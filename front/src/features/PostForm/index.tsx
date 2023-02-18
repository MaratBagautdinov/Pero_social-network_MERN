import s from './PostForm.module.css'
import {FC, useState} from "react";
import {Icon16View, Icon20Chain} from "@vkontakte/icons";
import {TCreatePost} from "@/widgets/Posts/model/types";

type TPostForm = { createPost: TCreatePost }
const PostForm: FC<TPostForm> = ({createPost}) => {
    const [content, setContent] = useState('')
    const addPost = () =>{
        createPost(content)
        setContent('')
    }
    return (
        <div className={s.NewPost}>
            <div className={s.inputCover}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write new post..."/>
                <div className={s.NewPostInterface}>
                    <div>
                        <Icon20Chain/>
                        <Icon16View/>
                    </div>
                    <button
                        onClick={addPost}
                    >Send</button>
                </div>
            </div>
        </div>
    );
};

export default PostForm;