import axios from 'axios'
import { TUserMin } from '@/entities/User/model/types'

export default async () => {
	const users: { data: TUserMin[] } = await axios.get(
		import.meta.env.VITE_API + 'users'
	)
	return users.data
}
