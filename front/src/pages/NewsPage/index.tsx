import s from './NewsPage.module.sass'
import Posts from '@/widgets/Posts'
import { useContext, useEffect } from 'react'
import { InitID } from '@/processes/model/context'
import useChannelsStore from '@/pages/NewsPage/model/useChannelsStore'
import LogoLink from '@/shared/LogoLink'

const NewsPage = () => {
	const meID = useContext(InitID)
	const { getChannels, channels } = useChannelsStore()
	useEffect(() => {
		getChannels()
	}, [meID, getChannels])
	return (
		<div className={s.NewsPage}>
			<h2>Channels</h2>
			{channels.map(chn => (
				<LogoLink key={chn.id} id={chn.id} name={chn.name} logo={chn.logo} />
			))}
			<h2>News</h2>
			<Posts id={meID} page='news' />
		</div>
	)
}

export default NewsPage
