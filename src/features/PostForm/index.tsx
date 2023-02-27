import s from './PostForm.module.css'
import { FC, useState } from 'react'
import { TCreatePost } from '@/widgets/Posts/model/types'
import Button from '@/shared/Button'
import Cursor from '@/shared/Cursor'

type TPostForm = { createPost: TCreatePost }
const PostForm: FC<TPostForm> = ({ createPost }) => {
	const [content, setContent] = useState('')
	const addPost = () => {
		createPost(content)
		setContent('')
	}
	return (
		<div className={s.NewPost}>
			{!content && <Cursor />}
			<div className={s.inputCover}>
            <textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
							placeholder='Напиши новый пост...' />
				<div className={s.NewPostInterface}>
					<Button action={addPost} title='Отправить' />
				</div>
			</div>
		</div>
	)
}

export default PostForm