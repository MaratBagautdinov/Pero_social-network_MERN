import s from './Layout.module.sass'
import React, { FC } from 'react'
import Navbar from '@/widgets/Navbar'
import Routers from '../../App/Routers'

type TLayout = {
	loginID: string
	logout: () => void
}
const Layout: FC<TLayout> = ({ loginID, logout }) => {
	return (
		<div className={s.Layout}>
			<Navbar loginID={loginID} logout={logout} />
			<div className={s.main}>
				<Routers />
			</div>
		</div>
	)
}

export default Layout
