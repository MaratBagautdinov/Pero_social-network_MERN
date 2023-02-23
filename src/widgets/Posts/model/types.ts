import { TPost } from '@/entities/Post/model/types'
export interface IPosts {
	id: string
	page: 'news' | 'profile'
}
export type TCreatePost = (text?: string, images?: string[]) => void
export interface IPostsStore {
	posts: TPost[]
	news: TPost[]
	me: boolean
	isLoading: boolean
	error: string
	getPosts: (id: string) => void
	getNews: () => void
	delPost: (id: string) => void
	updatePost: (id: string, text: string, images: string[]) => void
	createPost: TCreatePost
	likePost: (id: string) => void
}
