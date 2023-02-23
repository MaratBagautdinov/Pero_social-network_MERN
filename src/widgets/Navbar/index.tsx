import s from './Navbar.module.sass'
import LinkIcon from '@/shared/LinkIcon'
import { FC } from 'react'

const Navbar: FC<{ loginID: string; logout: () => void }> = ({ logout, loginID }) => {
	const Links = ['profile', 'news', 'peoples']
	return (
		<div className={s.Navbar}>
			<nav>
				{Links.map(l => (
					<LinkIcon
						key={l}
						icon={`${l}.svg`}
						title={l}
						path={`${l === 'peoples' ? '../' : l}/${l === 'profile' ? loginID : ''}`}
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
