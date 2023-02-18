import { create } from 'zustand'
import getUsers from '@/widgets/UsersExplorer/api/getUsers'
import { TUserMin } from '@/entities/User/model/types'

interface IUserState {
	users: TUserMin[]
	isLoading: boolean
	getUsers: () => void
}
export default create<IUserState>((set, get) => ({
	users: [],
	isLoading: false,
	getUsers: async () => {
		const res = await getUsers()
		set({ users: res })
	}
}))
