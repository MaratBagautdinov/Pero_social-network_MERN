import s from '../User.module.sass'
import { FC, useEffect, useState } from 'react'
import { IUserState } from '@/entities/User/model/types'
import Logo from '@/widgets/Logo/Logo'
import List from '@/shared/List'
import Button from '@/shared/Button'
import InputIcon from '@/shared/InputIcon'
import Cursor from '@/shared/Cursor'

const Children: FC<{ store: IUserState; id: string }> = ({ store }) => {
	const { user, updateData, addFriend, updateLogo, logoLoading } = store
	const minData = {
		location: { ...user.location },
		profession: user.profession,
		status: user.status
	}
	useEffect(() => {
	}, [user])
	const [edit, setEdit] = useState(false)
	const [info, setInfo] = useState(minData)
	const name = user.name.firstName + ' ' + user.name.lastName
	const disabled = !user.me
	const updateUserData = async () => {
		await updateData(info)
		setEdit(false)
	}
	const cancel = () => {
		setInfo(minData)
		setEdit(false)
	}
	const updateInfo = (data = minData) => {
		setInfo(data)
		setEdit(true)
	}
	return (
		<div className={s.profileInfo}>
			<Logo
				addFriend={addFriend}
				subscribers={user.subscribers}
				userID={user._id}
				logoLoading={logoLoading}
				userLogo={user.images.logo}
				updateLogo={updateLogo}
			/>
			<div className={s.user}>
				{edit ? (
					<div className={s.buttons}>
						<Button action={updateUserData} title='Сохранить' />
						<Button active={false} action={cancel} title='Отмена' />
					</div>
				) : <div className={s.mainUser}>
					<span><h2>{name}</h2> {user.birthday}</span>
				</div>}
				<div className={s.otherUser}>
					<ul>
						{!info.status && user.me && <Cursor />}
						<li>Статус<InputIcon
							disabled={disabled}
							value={info.status}
							setValue={v => updateInfo({ ...info, status: v })}
							placeholder='status'
						/></li>
						<li className={s.location}>
							<span>Локация</span>
							<div>
								<InputIcon
									disabled={disabled}
									value={info.location.country}
									setValue={v => updateInfo({ ...info, location: { ...info.location, country: v } })}
									placeholder='страна'
								/>
								<InputIcon
									disabled={disabled}
									value={info.location.city}
									setValue={v => updateInfo({ ...info, location: { ...info.location, city: v } })}
									placeholder='город'
								/>
							</div>
						</li>
						<li>
							Профессия
							<InputIcon
								disabled={disabled}
								value={info.profession}
								setValue={v => updateInfo({ ...info, profession: v })}
								placeholder='profession'
							/>
						</li>
					</ul>
				</div>
			</div>
			<List subscribers={user.subscribers} title='Подписчики'/>
		</div>
	)
}

export default Children
