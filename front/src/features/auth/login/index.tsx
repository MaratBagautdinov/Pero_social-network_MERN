import InputIcon from '@/shared/InputIcon'
import { FC, useState } from 'react'
import { ILogin } from '@/processes/types'
import { Icon16User } from '@vkontakte/icons'
interface IAuthLogin {
	login: (params: ILogin) => void
	emailStore: string
}
const AuthLogin: FC<IAuthLogin> = ({ login, emailStore }) => {
	const [email, setLogin] = useState(emailStore)
	const [password, setPassword] = useState('')
	return (
		<form onSubmit={e => e.preventDefault()}>
			<InputIcon placeholder='login' value={email} setValue={setLogin} />
			<InputIcon
				placeholder='password'
				value={password}
				setValue={setPassword}
			/>
			<button type='submit' onClick={() => login({ email, password })}>
				login
			</button>
		</form>
	)
}

export default AuthLogin
