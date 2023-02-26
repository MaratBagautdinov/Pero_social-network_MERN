import s from './Logo.module.sass'
import { FC, useContext, useRef, useState } from 'react'
import { InitID } from '@/processes/model/context'
import Button from '@/shared/Button'
import BoolButtons from '@/entities/User/ui/boolButtons'
import { TUserMin } from '@/entities/User/model/types'

type TLogo = {
	userID: string
	userLogo: string
	subscribers: TUserMin[]
	addFriend: (id: string) => void
	updateLogo: (img: any) => void
	logoLoading: boolean
}
const Logo: FC<TLogo> = ({ addFriend, logoLoading, subscribers, userID, userLogo, updateLogo }) => {
	const meID = useContext(InitID)
	const [edit, setEdit] = useState(false)
	const sendLogo = async (e: any) => {
		try {
			const formData = new FormData()
			formData.append('image', e.target.files[0])
			await updateLogo(formData)
		} catch (err) {
			console.log(err)
		}
		setEdit(false)
	}
	const ref = useRef<HTMLInputElement>(null)

	return (
		<div className={s.logo}>
			{logoLoading ?
				<img src='/assets/loading.gif' alt='loading' width='100' />
				:
				(
					edit ? (
						<div className={s.editForm}>
							<div className={s.btnForm}>
								<input ref={ref} type='file' onChange={sendLogo} className={s.hidden} />
								<Button
									// @ts-ignore
									action={() => ref.current.click()}
									title='Add photo' />
								<Button action={() => setEdit(false)} title='Close' active={false} />
							</div>
						</div>
					) : (
						<div className={s.imgCover}
								 style={{ backgroundImage: `url(${userLogo || '/assets/main/user.svg'})` }}>
							{userID === meID && (<div className={s.openEdit}>
								<Button title='Update logo' action={() => setEdit(true)} />
							</div>)}
						</div>
					))}
			{userID !== meID && <BoolButtons
				addFriend={addFriend}
				id={userID}
				subscribers={subscribers}
			/>}
		</div>
	)
}

export default Logo
