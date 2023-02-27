import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import CheckAuth from '@/processes/CheckAuth'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<HashRouter>
			<CheckAuth />
		</HashRouter>
	</React.StrictMode>
)
