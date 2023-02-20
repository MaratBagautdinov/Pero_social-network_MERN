import { FC, useEffect } from 'react'
import s from './Posts.module.sass'
import Post from '@/entities/Post'
import usePostsStore from '@/widgets/Posts/model/usePostsStore'
import { IPosts } from '@/widgets/Posts/model/types'
import PostForm from '@/features/PostForm'

const Posts: FC<IPosts> = ({ id, page }) => {
	const {
		posts,
		news,
		me,
		createPost,
		likePost,
		delPost,
		updatePost,
		getPosts,
		getNews,
		isLoading
	} = usePostsStore()
	useEffect(() => {
		getPosts(id)
		getNews()
	}, [getPosts, getNews, id])
	const isProfile = page === 'profile'
	const list = isProfile ? posts : news
	return (
		<>
			{isProfile && me && <PostForm createPost={createPost} />}
			<div className={s.Posts}>
				{isLoading &&
					list.map(p => (
						<Post
							key={p._id}
							post={p}
							likePost={likePost}
							delPost={delPost}
							updatePost={updatePost}
							me={me}
							page={page}
						/>
					))}
			</div>
		</>
	)
}

export default Posts
