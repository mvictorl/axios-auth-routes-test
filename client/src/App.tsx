import React from 'react'
import { useAuth } from './hooks/useAuth'

function App() {
	const auth = useAuth()

	return (
		<>
			<div>React App</div>
			<h2>{auth.isAuth.toString()}</h2>
			<button onClick={auth.toggleIsAuth}>Toggle "isActivated"</button>
		</>
	)
}

export default App
