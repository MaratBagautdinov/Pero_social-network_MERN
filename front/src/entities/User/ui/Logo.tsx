import s from './Logo.module.sass'
import { FC, useContext, useEffect, useRef, useState } from 'react'
import { InitID } from '@/processes/model/context'

type TLogo = {
	userLogo: string
	userName: string
	updateLogo: (img: any) => void
	getUser: (img: any) => void
}
const Logo: FC<TLogo> = ({ getUser, userLogo, userName, updateLogo }) => {
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
					<input ref={ref} type='file' placeholder='hi' onChange={sendLogo} />
					<div className={s.btnForm}>
						<button onClick={() => setEdit(false)}>Close</button>
					</div>
				</div>
			) : (
				<>
					<div className={s.imgCover}>
						<div className={s.openEdit} onClick={() => setEdit(true)}>
							<button>Update logo</button>
						</div>
						<img src={`/users/${userLogo || 'user.svg'}`} alt={userName} />
					</div>
				</>
			)}
		</div>
	)
}

export default Logo
