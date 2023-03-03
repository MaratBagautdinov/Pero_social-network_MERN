import s from './Alert.module.sass'
import { FC } from 'react'
import Button from '@/shared/Button'

type TAlert = {
	logout: ()=>void
	exit: ()=>void
}
const Alert: FC<TAlert> = ({ logout, exit }) => {
	return (
		<div className={s.Alert}>
			<div>
				<Button action={logout} title='Выйти' active={false} />
				<Button action={exit} title='Отмена' active={true} />
			</div>
		</div>
	)
}

export default Alert