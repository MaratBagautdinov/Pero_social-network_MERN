import s from './PostForm.module.css'
import { FC, useState } from 'react'
import { TCreatePost } from '@/widgets/Posts/model/types'
import Button from '@/shared/Button'

type TPostForm = { createPost: TCreatePost }
const PostForm: FC<TPostForm> = ({ createPost }) => {
	const [content, setContent] = useState('')
	const addPost = () => {
		createPost(content)
		setContent('')
	}
	return (
		<div className={s.NewPost}>
			<div className={s.inputCover}>
            <textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
							placeholder='Write new post...' />
				<div className={s.NewPostInterface}>
					<Button action={addPost} title='Отправить' />
				</div>
			</div>
		</div>
	)
}

export default PostForm