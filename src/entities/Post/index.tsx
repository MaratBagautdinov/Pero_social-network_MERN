import s from './Post.module.css'
import { FC, useState } from 'react'
import { IPost } from '@/entities/Post/model/types'
import LikePost from '@/features/likePost'
import Button from '@/shared/Button'

const Post: FC<IPost> = ({ post, me, likePost, updatePost, delPost, page }) => {
	const [edit, setEdit] = useState(false)
	const [value, setValue] = useState(post.content.text)
	const saveEdit = () => {
		updatePost(post._id, value, [])
		setEdit(!edit)
	}
	return (
		<div className={s.postItem}>
			<div className={`${s.postHeader} ${me && page === 'profile' && s.me}`}>
				<div className={s.postInfo}>
					<div className={s.postInfoLogo}
							 style={{ backgroundImage: `url(${import.meta.env.VITE_API}uploads/${post.userLogo || 'user.svg'})` }} />
					<div className={s.postInfoName}>
						<p>{post.userName}</p>
						<p className={s.postDate}>{post.date.day} {post.date.time}</p>
					</div>
				</div>
				<div className={`${s.postInterface} ${me && page === 'profile' && s.me}`}>
					<LikePost
						likedUsers={post.likedUsers}
						likePost={likePost}
						likes={post.likes}
						postID={post._id}
					/>
					{page === 'profile' && me && (
						<>
							<img alt='stylus' onClick={() => setEdit(!edit)} src={'/assets/main/stylus.png'} />
							<img alt='delete' onClick={() => delPost(post._id)} src={'/assets/main/delete.png'} />
						</>
					)}
				</div>
			</div>
			{edit ? (
				<>
					<textarea
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<div className={s.buttons}>
						<Button title={'Save'} action={saveEdit} />
						<Button title={'Close'} active={false} action={() => setEdit(!edit)} />
					</div>
				</>
			) : (
				<p className={s.postContent}>{post.content.text}</p>
			)}
		</div>
	)
}

export default Post
