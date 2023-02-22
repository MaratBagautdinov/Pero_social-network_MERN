import { create } from 'zustand'
import { IUserState } from '@/entities/User/model/types'
import instance from '@/entities/instance'

export default create<IUserState>((set, get) => ({
	user: {
		_id: '',
		birthday: '',
		email: '',
		images: {
			logo: '',
			gallery: []
		},
		location: {
			city: '',
			country: ''
		},
		name: {
			firstName: '',
			lastName: ''
		},
		subscribers: [],
		channels: [],
		favoriteImages: [],
		favoritePosts: [],
		posts: [],
		profession: '',
		status: '',
		me: false
	},
	isLoading: false,
	getUser: async id => {
		set({ isLoading: false })
		await instance()
			.get(`/users/${id}`)
			.then(res => {
				set({ user: res.data })
				set({ isLoading: true })
			})
	},
	addFriend: async id => await instance().put(`/users/add-friend/${id}`),
	updateData: async data => await instance().put(`/users/update`, data),
	updateLogo: async img => await instance().post(`/users/updateLogo`, img)
}))