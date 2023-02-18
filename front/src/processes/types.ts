export interface ILogin {
	email: string
	password: string
}
export interface IRegister {
	email: string
	password: string
	name: {
		firstName: string
		lastName: string
	}
	location: {
		country: string
		city: string
	}
	birthday: string
}
export interface IUserState {
	authID: string
	token: string
	email: string
	error: string
	logout: () => void
	authLogin: (params: ILogin) => void
	authRegister: (params: IRegister) => void
}
