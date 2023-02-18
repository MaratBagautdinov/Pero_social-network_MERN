import s from './List.module.sass'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { TUserMin } from '@/entities/User/model/types'

type TList = {
	subscribers: TUserMin[]
}
const List: FC<TList> = ({ subscribers }) => {
	return (
		<li>
			{'My subscribers: '}
			<ul>
				{subscribers.map(u => (
					<li key={u.id}>
						<Link to={`../profile/${u.id}`}>{u.name}</Link>
					</li>
				))}
			</ul>
		</li>
	)
}

export default List
