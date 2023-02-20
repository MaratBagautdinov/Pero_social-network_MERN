import s from './UsersExplorerList.module.sass'
import { FC, useEffect } from 'react'
import useUsersStore from '@/widgets/UsersExplorer/model/useUsersStore'
import LogoLink from '@/shared/LogoLink'

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
				<LogoLink id={u.id} name={u.name} logo={u.logo} key={u.id} />
			))}
		</ul>
	)
}

export default UsersExplorerList
