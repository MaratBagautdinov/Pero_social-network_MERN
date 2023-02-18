import s from './UsersExplorerItem.module.sass'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { TUserMin } from '@/entities/User/model/types'

const UsersExplorerItem: FC<TUserMin> = ({ name, logo, id }) => {
	return (
		<li className={s.UsersExplorerItem}>
			<img src={`/users/${logo || 'user.svg'}`} alt={name} />
			<div className={s.userInfo}>
				<Link to={`../profile/${id}`}>
					<p>{name}</p>
				</Link>
				{/*<div className={s.Send}>*/}
				{/*    <LinkIcon icon=<Icon28Messages/> title='Send message' path={`dialogs/${id}`} />*/}
				{/*</div>*/}
			</div>
		</li>
	)
}

export default UsersExplorerItem
