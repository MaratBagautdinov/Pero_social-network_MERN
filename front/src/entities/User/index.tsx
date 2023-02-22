import { FC, useEffect } from 'react'
import useUserStore from '@/entities/User/model/useUserStore'
import Children from '@/entities/User/ui/children'

const User: FC<{ id: string }> = ({ id }) => {
	const { getUser, isLoading } = useUserStore()
	const store = useUserStore()
	useEffect(() => {
		getUser(id)
	}, [getUser, id])
	return isLoading ? <Children store={store} id={id} /> : <img src='/assets/loading.gif' alt='loading' width='100' />
}

export default User
