import '../css/App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

import MainForIndex from './Main/MainForIndex/Main.jsx'
import MainForAbout from './Main/MainForAbout/Main.jsx'
import MainForSurvey from './Main/MainForSurvey/Main.jsx'

function App() {
	return (
		<div className='App'>
			<Header />

			{/* Всякий раз, когда местоположение изменяется, <Routes> просматривает все свои 
			дочерние маршруты, чтобы найти наилучшее соответствие, и отображает эту ветвь 
			пользовательского интерфейса. */}
			<Routes>
				{/* Route -- связывают сегменты URL с компонентами, загрузкой данных */}
				<Route path='/' element={<MainForIndex />} />
				<Route path='/about' element={<MainForAbout />} />
				<Route path='/survey' element={<MainForSurvey />} />
			</Routes>

			<Footer />
		</div>
	)
}

export default App
