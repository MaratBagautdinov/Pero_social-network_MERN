export type TPost = {
	_id: string
	postOwn: string
	content: {
		text: string
		images: string[]
	}
	likes: number
	likedUsers: string[]
	date: {
		day: string
		time: string
	}
	__v: number
	userLogo: string
	userName: string
}

export interface IPost {
	post: TPost
	delPost: (id: string) => void
	updatePost: (id: string, text: string, images: string[]) => void
	likePost: (id: string) => void
	me: boolean
	page: 'profile' | 'news'
}
