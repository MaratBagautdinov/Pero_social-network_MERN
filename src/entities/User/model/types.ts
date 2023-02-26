export type TUserMin = {
	id: string
	name: string
	logo: string
}
export interface IUser {
	_id: string
	name: {
		firstName: string
		lastName: string
	}
	location: {
		country: string
		city: string
	}
	images: {
		logo: string
		gallery: []
	}
	email: string
	birthday: string
	posts: string[]
	channels: string[]
	subscribers: TUserMin[]
	favoritePosts: string[]
	favoriteImages: string[]
	status: string
	profession: string
	me: boolean
}
export interface IUserState {
	user: IUser
	isLoading: boolean
	logoLoading: boolean
	getUser: (id: string) => void
	addFriend: (id: string) => void
	updateLogo: (data: any) => void
	updateData: (data: {
		status: string
		location: {
			country: string
			city: string
		}
		profession: string
	}) => void
}
