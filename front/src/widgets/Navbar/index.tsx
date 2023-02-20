import s from './Navbar.module.sass'
import LinkIcon from '@/shared/LinkIcon'
import { FC } from 'react'
const Links = ['profile', 'news', 'peoples']
const Navbar: FC<{ loginID: string; logout: () => void }> = ({
	logout,
	loginID
}) => {
	return (
		<div className={s.Navbar}>
			<nav>
				{Links.map(l => (
					<LinkIcon
						key={l}
						icon={`${l}.svg`}
						title={l}
						path={`${l}/${l === 'profile' ? loginID : ''}`}
					/>
				))}
				<div onClick={() => logout()}>
					<LinkIcon key={'Exit2'} icon='exit.svg' title='Exit' path={'../'} />
				</div>
			</nav>
		</div>
	)
}

export default Navbar
