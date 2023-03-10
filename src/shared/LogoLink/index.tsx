import s from './LogoLink.module.sass'
import { FC } from 'react'
import { TUserMin } from '@/entities/User/model/types'
import { Link } from 'react-router-dom'

const LogoLink: FC<TUserMin> = ({ logo, id, name }) => {
	return (
		<Link to={`../profile/${id}`} className={s.LogoLink}>
			<div style={{ backgroundImage: `url(${logo || '/assets/main/user.svg'})` }} />
			<p>{name}</p>
		</Link>
	)
}

export default LogoLink
