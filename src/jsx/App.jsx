import { useState } from 'react'
import reactLogo from '../img/react-logo.svg'
import viteLogo from '../img/vite-logo.svg'
import '../css/App.css'

import Header from './Header.jsx'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
		<Header />
		<main>

		</main>
		<div>
			<a href="https://vitejs.dev" target="_blank">
			<img src={viteLogo} className="logo" alt="Vite logo" />
			</a>
			<a href="https://react.dev" target="_blank">
			<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
		</div>
		<div className="card">
			<button onClick={() => setCount((count) => count + 1)}>
			count is {count}
			</button>
		</div>
		</>
	)
}

export default App
