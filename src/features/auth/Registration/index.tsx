import InputIcon from '@/shared/InputIcon'
import { FC, useState } from 'react'
import { IRegister } from '@/processes/types'
import Button from "@/shared/Button";

interface IAuthReg {
	reg: (params: IRegister) => void
	s: any
}
const Registration: FC<IAuthReg> = ({ s,reg }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	return (
		<form onSubmit={e => e.preventDefault()}>
			<InputIcon placeholder='email' value={email} setValue={setEmail} />
			<InputIcon
				placeholder='пароль'
				value={password}
				setValue={setPassword}
			/>
			<div className={s.pair}>
				<InputIcon
					placeholder='имя'
					value={firstName}
					setValue={setFirstName}
				/>
				<InputIcon
					placeholder='фамилия'
					value={lastName}
					setValue={setLastName}
				/>
			</div>
			<Button action={() =>
				reg({
					email,
					password,
					name: { firstName, lastName }
				})
			} title="Зарегистрироваться"/>
		</form>
	)
}

export default Registration
