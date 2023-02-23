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
	const [country, setCountry] = useState('')
	const [city, setCity] = useState('')
	const [birthday, setBirthday] = useState('')
	return (
		<form onSubmit={e => e.preventDefault()}>
			<InputIcon placeholder='login' value={email} setValue={setEmail} />
			<InputIcon
				placeholder='password'
				value={password}
				setValue={setPassword}
			/>
			<div className={s.pair}>
				<InputIcon
					placeholder='first name'
					value={firstName}
					setValue={setFirstName}
				/>
				<InputIcon
					placeholder='last name'
					value={lastName}
					setValue={setLastName}
				/>
			</div>
			<div className={s.pair}>
				<InputIcon placeholder='country' value={country} setValue={setCountry} />
				<InputIcon placeholder='city' value={city} setValue={setCity} />
			</div>
			<InputIcon
				type='date'
				placeholder='birthday'
				value={birthday}
				setValue={setBirthday}
			/>
			<Button action={() =>
				reg({
					email,
					password,
					location: { city, country },
					birthday,
					name: { firstName, lastName }
				})
			} title="Зарегистрироваться"/>
		</form>
	)
}

export default Registration
