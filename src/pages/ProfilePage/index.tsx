import s from './ProfilePage.module.sass'
import { useParams } from 'react-router-dom'
import ProfileInfo from '@/widgets/ProfileInfo'
import Posts from '@/widgets/Posts'

const ProfilePage = () => {
	const { id } = useParams()
	return (
		<div className={s.ProfilePage}>
			<ProfileInfo id={`${id}`} />
			<Posts id={`${id}`} page='profile' />
		</div>
	)
}

export default ProfilePage
