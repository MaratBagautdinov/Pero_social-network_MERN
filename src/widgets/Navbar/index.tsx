import s from './Navbar.module.sass'
import LinkIcon from '@/shared/LinkIcon'
import { FC, useState } from 'react'
import Alert from '@/shared/Alert'
import { useLocation } from 'react-router-dom'

const Navbar: FC<{ loginID: string; logout: () => void }> = ({ logout, loginID }) => {
	const Links = ['profile', 'news', 'peoples']
	const {pathname} = useLocation()
	const [exit, setExit] = useState(false)
	return (
		<div className={s.Navbar}>
			{exit && <Alert logout={()=>logout()} exit={()=>setExit(false)} />}
			<nav>
				{Links.map(l => (
					<LinkIcon
						key={l}
						icon={`${l}.svg`}
						title={l}
						path={`${l === 'peoples' ? '../' : l}/${l === 'profile' ? loginID : ''}`}
					/>
				))}
				<div onClick={() => setExit(true)}>
					<LinkIcon key={'Exit2'} icon='exit.svg' title='Exit' path={pathname} />
				</div>
			</nav>
		</div>
	)
}

export default Navbar
