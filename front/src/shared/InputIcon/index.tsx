import s from './InputIcon.module.sass'
import { FC } from 'react'

type TInputIcon = {
	placeholder: string
	value: string
	setValue: (vl: string) => void
}
const InputIcon: FC<TInputIcon> = ({ placeholder, value, setValue }) => {
	return (
		<span className={s.InputIcon}>
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</span>
	)
}

export default InputIcon
