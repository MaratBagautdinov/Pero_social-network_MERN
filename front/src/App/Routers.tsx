import s from './Routes.module.sass'
import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import NewsPage from '@/pages/NewsPage'
import ProfilePage from '@/pages/ProfilePage'
import DialogsPage from '@/pages/DialogsPage'
import UsersExplorerPage from '@/pages/usersExplorerPage'
import SettingsPage from '@/pages/SettingsPage'
import UndefinedPage from '@/pages/UndefinedPage'
const Routers: FC = () => {
	return (
		<Routes>
			<Route element={<NewsPage />} path='news/*' />
			<Route element={<ProfilePage />} path='profile/:id' />
			<Route element={<DialogsPage />} path='dialogs/:id' />
			<Route element={<UsersExplorerPage />} path='peoples/*' />
			<Route element={<SettingsPage />} path='settings/*' />
			<Route element={<UndefinedPage />} path='/*' />
		</Routes>
	)
}

export default Routers
