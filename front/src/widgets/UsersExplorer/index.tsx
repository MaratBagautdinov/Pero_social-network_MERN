import s from './UsersExplorerList.module.sass'
import { FC, useEffect } from 'react'
import UsersExplorerItem from '@/entities/UserExplorerItem'
import useUsersStore from '@/widgets/UsersExplorer/model/useUsersStore'

type TUsersExplorerList = {}
const UsersExplorerList: FC<TUsersExplorerList> = ({}) => {
	const getUsers = useUsersStore(state => state.getUsers)
	useEffect(() => {
		getUsers()
	}, [getUsers])
	const users = useUsersStore(state => state.users)
	return (
		<ul className={s.UsersExplorerList}>
			{users.map(u => (
				<UsersExplorerItem id={u.id} name={u.name} logo={u.logo} key={u.id} />
			))}
		</ul>
	)
}

export default UsersExplorerList
