import React, { FC, useEffect } from 'react'
import Layout from '@/widgets/Layout'
import AuthPage from '@/pages/AuthPage'
import useAuthStore from './model/useAuthStore'
import { InitID } from '@/processes/model/context'

const CheckAuth: FC = () => {
	const { authID, authLogin, email, logout, error, authRegister } =
		useAuthStore()
	useEffect(() => {
	}, [authID, error])
	return !!authID ? (
		<InitID.Provider
			value={authID}
			children={<Layout loginID={authID} logout={logout} />}
		/>
	) : (
		<AuthPage
			authLogin={authLogin}
			emailStore={email}
			error={error}
			authRegister={authRegister}
		/>
	)
}

export default CheckAuth
