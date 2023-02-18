import s from './LikePost.module.sass'
import { FC, memo, useContext, useEffect, useState } from 'react'
import { InitID } from '@/processes/model/context'

type TLikePost = {
	postID: string
	likedUsers: string[]
	likes: number
	likePost: (id: string) => void
}
const LikePost: FC<TLikePost> = ({ likedUsers, postID, likes, likePost }) => {
	const meID = useContext(InitID)
	useEffect(() => {}, [likedUsers])
	const isLike = !!likedUsers.find(u => u === meID)
	const [like, setLike] = useState(isLike)
	return (
		<span className={s.favorite} onClick={() => likePost(postID)}>
			<p className={like ? s.active : ''} onClick={() => setLike(!like)}>
				{likes}
			</p>
		</span>
	)
}

export default memo(LikePost)
