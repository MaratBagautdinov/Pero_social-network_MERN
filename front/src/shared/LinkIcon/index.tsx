import s from './LinkIcon.module.sass'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type TLinkIcon = {
	icon: any
	title: string
	path: string
}
const LinkIcon: FC<TLinkIcon> = ({ icon, title, path }) => {
	return (
		<Link className={s.LinkIcon} to={`../` + path} key={title}>
			<span>
				<img src={`/assets/main/${icon}`} alt={title} />
			</span>
			{title}
		</Link>
	)
}

export default LinkIcon
