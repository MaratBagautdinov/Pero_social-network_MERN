// import s from './BoolButtons.module.sass'
import { FC, useContext, useEffect, useState } from 'react'
import { InitID } from '@/processes/model/context'
import { TUserMin } from '@/entities/User/model/types'

type TBoolButtons = {
	me: boolean
	setEdit: (param: boolean) => void
	addFriend: (id: string) => void
	subscribers: TUserMin[]
	id: string
}

const BoolButtons: FC<TBoolButtons> = ({
	me,
	setEdit,
	addFriend,
	subscribers,
	id
}) => {
	const senderID = useContext(InitID)
	const isUser = subscribers.find(u => String(u.id) === senderID)
	const [sub, setSub] = useState(!!isUser)
	const subscribe = () => {
		addFriend(String(id))
		setSub(!sub)
	}
	useEffect(() => {}, [subscribers])
	return me ? (
		<button onClick={() => setEdit(true)}>
			<img src='/assets/main/settings.png' alt='set' />
		</button>
	) : (
		<button onClick={subscribe}>{sub ? 'unsubscribe' : 'subscribe'}</button>
	)
}

export default BoolButtons
