import s from './NewsPage.module.sass'
import Posts from '@/widgets/Posts'
import { useContext, useEffect } from 'react'
import { InitID } from '@/processes/model/context'
import useChannelsStore from '@/pages/NewsPage/model/useChannelsStore'
import List from '@/shared/List'

const NewsPage = () => {
	const meID = useContext(InitID)
	const { getChannels, channels } = useChannelsStore()
	useEffect(() => {
		getChannels()
	}, [meID, getChannels])
	return (
		<div className={s.NewsPage}>
			<List subscribers={channels} title='Мои каналы'/>
			<h2>Новости</h2>
			<Posts id={meID} page='news' />
		</div>
	)
}

export default NewsPage
