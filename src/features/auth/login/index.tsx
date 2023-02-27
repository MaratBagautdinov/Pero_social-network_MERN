import InputIcon from '@/shared/InputIcon'
import { FC, useState } from 'react'
import { ILogin } from '@/processes/types'
import Button from '@/shared/Button'

interface IAuthLogin {
	login: (params: ILogin) => void
	emailStore: string
}

const AuthLogin: FC<IAuthLogin> = ({ login, emailStore }) => {
	const [email, setLogin] = useState(emailStore)
	const [password, setPassword] = useState('')
	return (
		<form onSubmit={e => e.preventDefault()}>
			<InputIcon placeholder='email' value={email} setValue={setLogin} />
			<InputIcon
				type='password'
				placeholder='пароль'
				value={password}
				setValue={setPassword}
			/>
			<Button action={() => login({ email, password })} title='Войти' />
		</form>
	)
}

export default AuthLogin
