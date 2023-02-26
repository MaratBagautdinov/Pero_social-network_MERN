import { create } from 'zustand'
import { IUserState } from '@/entities/User/model/types'
import instance from '@/entities/instance'
import axios from 'axios'

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
	logoLoading: false,
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
	updateLogo: async img => {
		const { user } = get()
		set({ logoLoading: true })
		await axios.post("https://sparkling-ruby-fez.cyclic.app/upload", img)
			.then(async res=> {
				set({user: {...user, images:{...user.images, logo: res.data}}})
				await instance().post(`/users/updateLogo`, { title: res.data.Location })
			})
		set({ logoLoading: false })
	}
}))
