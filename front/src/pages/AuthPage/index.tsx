import s from './AuthLogin.module.sass'
import { FC, useState } from 'react'
import { ILogin, IRegister } from '@/processes/types'
import AuthLogin from '@/features/auth/login'
import Registration from '@/features/auth/Registration'
import { useNavigate } from 'react-router-dom'
interface IAuthLogin {
	authLogin: (params: ILogin) => void
	authRegister: (params: IRegister) => void
	emailStore: string
	error: string
}
const AuthPage: FC<IAuthLogin> = ({
	authLogin,
	error,
	emailStore,
	authRegister
}) => {
	const nav = useNavigate()
	const [auth, setAuth] = useState(true)
	const [err, setErr] = useState('')
	const login = async (params: ILogin) => {
		if (params.email && params.password) {
			await authLogin(params)
			await nav('/news')
		} else setErr('Fill in all the fields!')
	}
	const reg = async (params: IRegister) => {
		const {
			email,
			password,
			location: { country, city },
			birthday,
			name: { lastName, firstName }
		} = params
		if (
			email &&
			password &&
			country &&
			city &&
			birthday &&
			lastName &&
			firstName
		) {
			await authRegister(params)
			await authLogin({ email: params.email, password: params.password })
			await nav('/news')
		} else setErr('Fill in all the fields!')
	}
	return (
		<div className={s.AuthLogin}>
			<div>
				<h2 onClick={() => setAuth(true)}>Log in</h2>
				<h2 onClick={() => setAuth(false)}>Registration</h2>
			</div>
			{auth ? (
				<AuthLogin login={login} emailStore={emailStore} />
			) : (
				<Registration reg={reg} />
			)}
			{err}
			{error}
		</div>
	)
}

export default AuthPage
