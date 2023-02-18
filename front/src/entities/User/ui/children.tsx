import s from '../User.module.css'
import { FC, useEffect, useState } from 'react'
import { EditValue } from '@/shared/editValue'
import { IUserState } from '@/entities/User/model/types'
import BoolButtons from '@/entities/User/ui/boolButtons'
import Logo from '@/entities/User/ui/Logo'
import List from '@/shared/List'

const Children: FC<{ store: IUserState; id: string }> = ({ store, id }) => {
	const { user, getUser, updateData, addFriend, updateLogo } = store
	useEffect(() => {}, [user])
	const [edit, setEdit] = useState(false)
	const [country, setCountry] = useState(user.location.country)
	const [city, setCity] = useState(user.location.city)
	const [status, setStatus] = useState(user.status)
	const [profession, setProfession] = useState(user.profession)
	let name = user.name.firstName + ' ' + user.name.lastName
	const updateUserData = async () => {
		await updateData({
			location: {
				city,
				country
			},
			profession,
			status
		})
		await setEdit(false)
	}
	return (
		<div className={s.profileInfo}>
			<Logo
				getUser={getUser}
				userLogo={user.images.logo}
				updateLogo={updateLogo}
				userName={user.name.firstName}
			/>
			<div className={s.user}>
				<div className={s.mainUser}>
					<h2>{name}</h2>
					<p>
						Status:{' '}
						<EditValue edit={edit} value={status} setValue={setStatus} />
					</p>
				</div>
				<div className={s.otherUser}>
					<ul>
						<li>Birthday: {user.birthday}</li>
						<li>
							Location:{' '}
							<EditValue edit={edit} value={country} setValue={setCountry} />,{' '}
							<EditValue edit={edit} value={city} setValue={setCity} />
						</li>
						<li>
							Profession:{' '}
							<EditValue
								edit={edit}
								value={profession}
								setValue={setProfession}
							/>
						</li>
						{user.me && <List subscribers={user.subscribers} />}
					</ul>
				</div>
				{edit ? (
					<span>
						<button onClick={updateUserData}>Save</button>
						<button onClick={() => setEdit(false)}>Close</button>
					</span>
				) : (
					<BoolButtons
						addFriend={addFriend}
						me={user.me}
						id={user._id}
						setEdit={setEdit}
						subscribers={user.subscribers}
					/>
				)}
			</div>
		</div>
	)
}

export default Children
