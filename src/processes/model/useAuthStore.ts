import { create } from 'zustand'
import { login, register } from './../api/loginUser'
import { IUserState } from '../types'
import { getItem, removeItem, setItem } from '../helpers'

export default create<IUserState>(set => ({
	authID: getItem('id'),
	token: getItem('token'),
	email: getItem('email'),
	error: '',
	logout: () => {
		set({ authID: '' })
		set({ token: '' })
		removeItem('token')
		removeItem('id')
	},
	authLogin: params => {
		login(params)
			.then(res => {
				set({ authID: res.data.id })
				set({ token: res.data.token })
				setItem('token', res.data.token)
				setItem('id', res.data.id)
				setItem('email', params.email)
				set({ error: '' })
			})
			.catch(res => set({ error: res.response.data }))
	},
	authRegister: params => register(params)
}))
