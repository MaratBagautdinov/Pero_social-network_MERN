import { create } from 'zustand'
import { IPostsStore } from '@/widgets/Posts/model/types'
import instance from '@/entities/instance'

export default create<IPostsStore>((set, get) => ({
	posts: [],
	news: [],
	me: false,
	isLoading: false,
	error: '',
	getPosts: async id => {
		await instance()
			.get(`/posts/${id}`)
			.then(res => {
				set({ isLoading: true })
				set({ posts: res.data.posts })
				set({ me: res.data.me })
			})
			.catch(err => set({ error: 'Error' }))
	},
	getNews: async () => {
		await instance()
			.get(`/posts/news`)
			.then(res => {
				set({ isLoading: true })
				set({ news: res.data.posts })
			})
			.catch(err => set({ error: 'Error' }))
	},
	createPost: async (text = '', images = []) => {
		const { posts } = get()
		await instance()
			.post('posts', {
				content: {
					text,
					images
				}
			})
			.then(res =>
				set({
					posts: [res.data].concat(posts)
				})
			)
			.catch(res => set({ error: res.message }))
	},
	updatePost: async (id, text, images) => {
		const { posts } = get()
		await instance()
			.put(`posts/${id}`, {
				text,
				images
			})
			.then(() =>
				set({
					posts: posts.map(p => ({
						...p,
						content:
							p._id === id
								? {
										text,
										images
								  }
								: p.content
					}))
				})
			)
			.catch(res => set({ error: res.message }))
	},
	delPost: async id => {
		const { posts } = get()
		await instance()
			.delete(`posts/${id}`)
			.then(() =>
				set({
					posts: posts.filter(p => p._id !== id)
				})
			)
			.catch(res => set({ error: res.message }))
	},
	likePost: async id => {
		const { posts, news } = get()
		await instance()
			.put(`posts/like/${id}`)
			.then(res => {
				set({
					posts: posts.map(p => ({
						...p,
						likes: p._id === id ? res.data.likes : p.likes
					}))
				})
				set({
					news: news.map(p => ({
						...p,
						likes: p._id === id ? res.data.likes : p.likes
					}))
				})
			})
			.catch(res => set({ error: res.message }))
	}
}))
