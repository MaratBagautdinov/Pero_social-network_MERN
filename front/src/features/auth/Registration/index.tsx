import InputIcon from '@/shared/InputIcon'
import { FC, useState } from 'react'
import { IRegister } from '@/processes/types'

interface IAuthReg {
	reg: (params: IRegister) => void
}
const Registration: FC<IAuthReg> = ({ reg }) => {
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
			<InputIcon placeholder='country' value={country} setValue={setCountry} />
			<InputIcon placeholder='city' value={city} setValue={setCity} />
			<InputIcon
				placeholder='birthday'
				value={birthday}
				setValue={setBirthday}
			/>
			<button
				type='submit'
				onClick={() =>
					reg({
						email,
						password,
						location: { city, country },
						birthday,
						name: { firstName, lastName }
					})
				}
			>
				Registration
			</button>
		</form>
	)
}

export default Registration
