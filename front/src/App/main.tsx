import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CheckAuth from '@/processes/CheckAuth'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<CheckAuth />
		</BrowserRouter>
	</React.StrictMode>
)
