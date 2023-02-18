import s from './Navbar.module.sass'
import LinkIcon from '@/shared/LinkIcon'
import { FC } from 'react'
import {
	Icon20Users,
	Icon20User,
	Icon28Messages,
	Icon24Newsfeed,
	Icon24Settings,
	Icon20DoorArrowRightOutline
} from '@vkontakte/icons'
const size = 30
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
						icon={`${l}.png`}
						title={l}
						path={`${l}/${l === 'profile' ? loginID : ''}`}
					/>
				))}
				<span onClick={() => logout()}>
					<LinkIcon key={'Exit2'} icon='exit.png' title='Exit' path={'../'} />
				</span>
			</nav>
		</div>
	)
}

export default Navbar
