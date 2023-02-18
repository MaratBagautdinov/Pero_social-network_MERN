import { FC } from 'react'
interface IEdit {
	edit: boolean
	value: string
	setValue: (field: string) => void
}
export const EditValue: FC<IEdit> = ({ setValue, edit, value }) => {
	return !edit ? (
		<span>{value}</span>
	) : (
		<input
			type='text'
			value={value}
			onChange={e => setValue(e.target.value)}
			placeholder={value}
		/>
	)
}
