import s from './Post.module.css'
import { FC, useState } from 'react'
import { Icon24DeleteOutline, Icon24PenOutline } from '@vkontakte/icons'
import { IPost } from '@/entities/Post/model/types'
import LikePost from '@/features/likePost'

const Post: FC<IPost> = ({ post, me, likePost, updatePost, delPost, page }) => {
	const [edit, setEdit] = useState(false)
	const [value, setValue] = useState(post.content.text)
	const saveEdit = () => {
		updatePost(post._id, value, [])
		setEdit(!edit)
	}
	return (
		<div className={s.postItem}>
			<div className={s.postHeader}>
				<div className={s.postInfo}>
					<div className={s.postInfoLogo}>
						<img
							src={`/users/${post.userLogo || 'user.svg'}`}
							alt={post.postOwn}
						/>
					</div>
					<div className={s.postInfoName}>
						<p>{post.userName}</p>
						<p className={s.postDate}>{post.date.day}</p>
					</div>
				</div>
				<div className={s.postInterface}>
					<LikePost
						likedUsers={post.likedUsers}
						likePost={likePost}
						likes={post.likes}
						postID={post._id}
					/>
					{page === 'profile' && me && (
						<>
							<div onClick={() => setEdit(!edit)}>
								<Icon24PenOutline />
							</div>
							<div onClick={() => delPost(post._id)}>
								<Icon24DeleteOutline />
							</div>
						</>
					)}
				</div>
			</div>
			{edit ? (
				<>
					<input
						type='text'
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button onClick={saveEdit}>save</button>
					<button onClick={() => setEdit(!edit)}>close</button>
				</>
			) : (
				<div className={s.postContent}>{post.content.text}</div>
			)}
		</div>
	)
}

export default Post
