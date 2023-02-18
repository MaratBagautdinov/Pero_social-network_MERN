import { FC } from 'react'
import User from '@/entities/User'

const ProfileInfo: FC<{ id: string }> = ({ id }) => <User id={id} />

export default ProfileInfo
