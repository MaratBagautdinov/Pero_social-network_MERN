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
	getUser: (img: any) => void
}
const Logo: FC<TLogo> = ({ addFriend, subscribers, userID, getUser, userLogo, updateLogo }) => {
	const meID = useContext(InitID)
	const [edit, setEdit] = useState(false)
	const sendLogo = async (e: any) => {
		try {
			const formData = new FormData()
			formData.append('image', e.target.files[0])
			await updateLogo(formData)
			await getUser(meID)
		} catch (err) {
			console.log(err)
		}
		setEdit(false)
	}
	const ref = useRef<HTMLInputElement>(null)

	return (
		<div className={s.logo}>
			{edit ? (
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
						 style={{ backgroundImage: `url(${import.meta.env.VITE_API}uploads/${userLogo || 'user.svg'})` }}>
						 {/*style={{ backgroundImage: `url(https://pero.hb.bizmrg.com/logo.png)` }}>*/}
					{/*{userID === meID && (<div className={s.openEdit}>*/}
					{/*	<Button title='Update logo' action={() => setEdit(true)} />*/}
					{/*</div>)}*/}
				</div>
			)}
			{userID !== meID && <BoolButtons
				addFriend={addFriend}
				id={userID}
				subscribers={subscribers}
			/>}
		</div>
	)
}

export default Logo
