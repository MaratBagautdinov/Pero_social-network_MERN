import s from './LikePost.module.sass'
import { FC, memo, useContext, useEffect, useState } from 'react'
import { InitID } from '@/processes/model/context'
import Icon from "@/features/likePost/icon";

type TLikePost = {
	postID: string
	likedUsers: string[]
	likes: number
	likePost: (id: string) => void
}
const LikePost: FC<TLikePost> = ({ likedUsers, postID, likes, likePost }) => {
	const meID = useContext(InitID)
	const isLike = !!likedUsers.find(u => u === meID)
	const [like, setLike] = useState(isLike)
	useEffect(() => {}, [likedUsers])
	return (
		<span className={s.favorite} onClick={() => likePost(postID)}>
			<div className={like ? s.active : ''} onClick={() => setLike(!like)}>
				<p>{likes}</p><Icon color={like}/>
			</div>
		</span>
	)
}

export default memo(LikePost)
