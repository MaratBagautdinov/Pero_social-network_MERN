import s from './InputIcon.module.sass'
import { FC } from 'react'

type TInputIcon = {
	placeholder: string
	value: string
	disabled?: boolean
	type?: 'text' | 'date' | 'password'
	setValue: (vl: string) => void
}
const InputIcon: FC<TInputIcon> = ({type='text',disabled=false, placeholder, value, setValue }) => {
	return (
		<span className={s.InputIcon}>
			<input
				disabled={disabled}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</span>
	)
}

export default InputIcon
