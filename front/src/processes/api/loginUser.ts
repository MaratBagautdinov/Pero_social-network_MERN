import axios from 'axios'
import { ILogin, IRegister } from '../types'

export const login = async (params: ILogin) =>
	await axios.post(import.meta.env.VITE_API + 'users/auth/login', params)
export const register = async (params: IRegister) =>
	await axios.post(import.meta.env.VITE_API + 'users/auth/register', params)
