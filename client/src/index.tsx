import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ProviderAuth } from './hooks/useAuth'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ProviderAuth>
		<App />
	</ProviderAuth>
)
