import s from './List.module.sass'
import { FC } from 'react'
import { TUserMin } from '@/entities/User/model/types'
import LogoLink from "@/shared/LogoLink";

const List: FC<{subscribers: TUserMin[], title: string}> = ({ subscribers ,title}) => {
	return (
		<li className={s.List}>
			<h2>{title}</h2>
			<ul>
				{subscribers
					.map(u =>
						<LogoLink key={u.id} id={u.id} name={u.name} logo={u.logo}/>)}
			</ul>
		</li>
	)
}

export default List
