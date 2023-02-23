import { create } from 'zustand'
import instance from '@/entities/instance'
import { TUserMin } from '@/entities/User/model/types'

interface IChannelsState {
	channels: TUserMin[]
	isLoading: boolean
	getChannels: () => void
}
export default create<IChannelsState>(set => ({
	channels: [],
	isLoading: false,
	getChannels: async () => {
		set({ isLoading: false })
		await instance()
			.get(`/posts/channels`)
			.then(res => {
				set({ channels: res.data })
				set({ isLoading: true })
			})
	}
}))
