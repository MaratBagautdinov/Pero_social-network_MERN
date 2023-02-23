// import s from './BoolButtons.module.sass'
import { FC, useContext, useEffect, useState } from 'react'
import { InitID } from '@/processes/model/context'
import { TUserMin } from '@/entities/User/model/types'
import Button from "@/shared/Button";

type TBoolButtons = {
	addFriend: (id: string) => void
	subscribers: TUserMin[]
	id: string
}

const BoolButtons: FC<TBoolButtons> = ({
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
	return <Button action={subscribe} title={sub ? 'unsubscribe' : 'subscribe'} active={!sub}/>
}

export default BoolButtons
